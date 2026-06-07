import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { Camera, RefreshCw, Upload, Sparkles, Sliders, ArrowRight, VideoOff, AlertCircle } from 'lucide-react';
import { VIRTUAL_TRY_ON_FACES } from '../data';
import { motion } from 'motion/react';
import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

export enum AssetState {
  ASSET_LOADING = 'ASSET_LOADING',
  ASSET_READY = 'ASSET_READY',
  ASSET_ERROR = 'ASSET_ERROR',
  ASSET_UNSUPPORTED = 'ASSET_UNSUPPORTED'
}

interface VirtualTryOnViewProps {
  products: Product[];
  selectedProduct?: Product;
  setSelectedProduct: (p: Product) => void;
  setView: (v: string) => void;
}

export default function VirtualTryOnView({
  products,
  selectedProduct,
  setSelectedProduct,
  setView
}: VirtualTryOnViewProps) {
  const activeProduct = selectedProduct || products[0];
  const isTransparent = !!activeProduct.tryOnAsset;
  const transparentUrl = activeProduct.tryOnAsset || "";

  const [feedType, setFeedType] = useState<'model' | 'webcam' | 'upload'>('model');
  const [selectedModel, setSelectedModel] = useState(VIRTUAL_TRY_ON_FACES[0]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const [faceLandmarker, setFaceLandmarker] = useState<FaceLandmarker | null>(null);
  const [isModelLoading, setIsModelLoading] = useState<boolean>(true);
  const [autoAlign, setAutoAlign] = useState<boolean>(true);
  const [isSearchingFace, setIsSearchingFace] = useState<boolean>(false);
  const [showAdvancedControls, setShowAdvancedControls] = useState<boolean>(false);

  const [glassScale, setGlassScale] = useState(45);
  const [glassY, setGlassY] = useState(48);
  const [glassX, setGlassX] = useState(50);
  const [glassRotation, setGlassRotation] = useState(0);

  const [isManualAdjust, setIsManualAdjust] = useState<boolean>(false);
  const [userScale, setUserScale] = useState<number>(1.0);
  const [xOffset, setXOffset] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);
  const [rotationOffset, setRotationOffset] = useState<number>(0);

  const [isPointerDragging, setIsPointerDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initXOffset: number; initYOffset: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isManualAdjust || !containerRef.current) return;
    e.preventDefault();
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    
    setIsPointerDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initXOffset: xOffset,
      initYOffset: yOffset,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDragging || !dragStartRef.current || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;

    const deltaXPercent = (deltaX / rect.width) * 100;
    const deltaYPercent = (deltaY / rect.height) * 100;

    const newX = dragStartRef.current.initXOffset + deltaXPercent;
    const newY = dragStartRef.current.initYOffset + deltaYPercent;

    setXOffset(Math.max(-100, Math.min(100, Number(newX.toFixed(2)))));
    setYOffset(Math.max(-100, Math.min(100, Number(newY.toFixed(2)))));
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDragging) return;
    (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    setIsPointerDragging(false);
    dragStartRef.current = null;
  };

  const [assetState, setAssetState] = useState<AssetState>(AssetState.ASSET_LOADING);
  const [retryTrigger, setRetryTrigger] = useState<number>(0);
  const [previewRenderFailed, setPreviewRenderFailed] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isWebcam = feedType === 'webcam';
  const finalX = isWebcam ? (100 - glassX) + xOffset : glassX + xOffset;
  const finalRotation = isWebcam ? -glassRotation + rotationOffset : glassRotation + rotationOffset;
  const finalScale = glassScale * userScale;

  useEffect(() => {
    setPreviewRenderFailed(false);

    if (!isTransparent || !transparentUrl) {
      setAssetState(AssetState.ASSET_UNSUPPORTED);
      setPreviewRenderFailed(true);
      return;
    }

    setAssetState(AssetState.ASSET_LOADING);

    let active = true;
    const img = new Image();
    img.onload = () => {
      if (!active) return;
      setAssetState(AssetState.ASSET_READY);
    };
    img.onerror = () => {
      if (!active) return;
      setAssetState(AssetState.ASSET_ERROR);
      setPreviewRenderFailed(true);
    };
    img.src = transparentUrl + (retryTrigger > 0 ? `?v=${retryTrigger}` : '');

    return () => {
      active = false;
    };
  }, [transparentUrl, isTransparent, retryTrigger]);

  useEffect(() => {
    let active = true;
    async function loadMediaPipe() {
      try {
        setIsModelLoading(true);
        const filesetResolver = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.8/wasm"
        );
        const landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker_with_blendshapes/float16/1/face_landmarker_with_blendshapes.task",
            delegate: "GPU"
          },
          runningMode: "IMAGE",
          outputFaceBlendshapes: false,
          outputFacialTransformationMatrixes: false
        });
        if (active) {
          setFaceLandmarker(landmarker);
          setIsModelLoading(false);
        }
      } catch (err) {
        if (active) {
          setIsModelLoading(false);
          setIsManualAdjust(true);
          setAutoAlign(false);
        }
      }
    }
    loadMediaPipe();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (feedType === 'webcam') {
      startWebcam();
    } else {
      stopWebcam();
    }
    return () => stopWebcam();
  }, [feedType]);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480, facingMode: 'user' } 
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      setFeedType('model');
    }
  };

  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  const updateSetupFromLandmarks = (landmarks: any[]) => {
    if (!landmarks || landmarks.length === 0) return;

    const noseBridge = landmarks[168];
    const pLeftEye = { x: (landmarks[33].x + landmarks[133].x) / 2, y: (landmarks[33].y + landmarks[133].y) / 2 };
    const pRightEye = { x: (landmarks[362].x + landmarks[263].x) / 2, y: (landmarks[362].y + landmarks[263].y) / 2 };
    const pLeftTemple = landmarks[234];
    const pRightTemple = landmarks[454];
    
    const faceWidth = Math.hypot(pRightTemple.x - pLeftTemple.x, pRightTemple.y - pLeftTemple.y);
    const targetX = noseBridge.x * 100;
    const targetY = noseBridge.y * 100;
    const computedScaling = faceWidth * 1.08 * 100;
    
    const dx = pRightEye.x - pLeftEye.x;
    const dy = pRightEye.y - pLeftEye.y;
    const computedRotation = Math.atan2(dy, dx) * (180 / Math.PI);

    setGlassX(Number(targetX.toFixed(2)));
    setGlassY(Number(targetY.toFixed(2)));
    setGlassScale(Math.round(computedScaling));
    setGlassRotation(Number(computedRotation.toFixed(2)));
  };

  useEffect(() => {
    if (!faceLandmarker || feedType !== 'webcam' || !autoAlign) return;
    let active = true;
    const trackWebcamFrame = () => {
      if (!active || feedType !== 'webcam') return;
      if (videoRef.current && videoRef.current.readyState >= 2) {
        try {
          const results = faceLandmarker.detect(videoRef.current);
          if (results && results.faceLandmarks && results.faceLandmarks.length > 0) {
            updateSetupFromLandmarks(results.faceLandmarks[0]);
          }
        } catch (e) {}
      }
      requestAnimationFrame(trackWebcamFrame);
    };
    requestAnimationFrame(trackWebcamFrame);
    return () => { active = false; };
  }, [feedType, faceLandmarker, autoAlign]);

  const runStaticDetection = (imageUrl: string) => {
    if (!faceLandmarker || !autoAlign) return;
    setIsSearchingFace(true);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    img.onload = () => {
      try {
        const results = faceLandmarker.detect(img);
        if (results && results.faceLandmarks && results.faceLandmarks.length > 0) {
          updateSetupFromLandmarks(results.faceLandmarks[0]);
        }
      } catch (err) {} 
      finally { setIsSearchingFace(false); }
    };
    img.onerror = () => setIsSearchingFace(false);
  };

  useEffect(() => {
    if (feedType === 'model') runStaticDetection(selectedModel.url);
  }, [selectedModel, feedType, faceLandmarker, autoAlign]);

  useEffect(() => {
    if (feedType === 'upload' && uploadedImageUrl) runStaticDetection(uploadedImageUrl);
  }, [uploadedImageUrl, feedType, faceLandmarker, autoAlign]);

  const triggerAutoCalibration = () => {
    setAutoAlign(true);
    setIsManualAdjust(false);
    setUserScale(1.0);
    setXOffset(0);
    setYOffset(0);
    setRotationOffset(0);

    if (feedType === 'model') runStaticDetection(selectedModel.url);
    else if (feedType === 'upload' && uploadedImageUrl) runStaticDetection(uploadedImageUrl);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImageUrl(url);
      setFeedType('upload');
    }
  };

  const renderFrameCarousel = () => (
    <section className="bg-white dark:bg-[#131b2e]/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 w-full shadow-sm mt-8">
      <h3 className="font-label-technical text-xs tracking-widest uppercase font-bold text-gray-400 mb-6 text-center sm:text-left">
        Try On More Styles
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 hide-scrollbar">
        {products.filter(item => !!item.tryOnAsset).map((item) => {
          const isSelected = activeProduct.id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              className={`flex-shrink-0 w-44 p-4 bg-gray-50 dark:bg-slate-900 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md flex flex-col justify-between border-2 ${
                isSelected ? 'border-[#00687a] bg-white' : 'border-transparent'
              }`}
            >
              <div className="h-[100px] w-full flex items-center justify-center p-2 rounded-lg overflow-hidden mb-4">
                <img className="max-w-full max-h-[70px] object-contain transition-transform duration-300 hover:scale-110" alt={item.name} src={item.image} />
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-tight text-gray-900 dark:text-gray-100 mb-1">{item.name}</p>
                <p className="text-[10px] text-gray-500 font-medium">${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <div className="py-12 max-w-7xl mx-auto px-6">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-label-technical text-xs text-[#00687a] dark:text-[#acedff] uppercase tracking-widest font-bold block mb-2">
            Virtual Experience
          </span>
          <h1 className="font-display-lg text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Try On Instantly
          </h1>
        </div>
        
        <div className="flex bg-gray-100 dark:bg-slate-900 p-1 rounded-lg">
          <button
            onClick={() => setFeedType('model')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
              feedType === 'model' ? 'bg-white dark:bg-slate-800 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Models
          </button>
          <button
            onClick={() => setFeedType('webcam')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center gap-2 ${
              feedType === 'webcam' ? 'bg-white dark:bg-slate-800 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Camera size={14} /> Live
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center gap-2 ${
              feedType === 'upload' ? 'bg-white dark:bg-slate-800 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Upload size={14} /> Upload
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 w-full flex flex-col">
          <div 
            ref={containerRef}
            className="bg-gray-100 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg relative flex items-center justify-center aspect-[4/3] md:aspect-video w-full"
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {feedType === 'model' && (
                <img className="w-full h-full object-cover" alt={selectedModel.name} src={selectedModel.url} />
              )}
              {feedType === 'webcam' && (
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover scale-x-[-1]" />
              )}
              {feedType === 'upload' && uploadedImageUrl && (
                <img className="w-full h-full object-cover" alt="Upload" src={uploadedImageUrl} />
              )}
            </div>

            <div className="absolute inset-0 pointer-events-none z-20">
              {assetState === AssetState.ASSET_READY && !previewRenderFailed && (
                <motion.div
                  key={transparentUrl}
                  className="absolute"
                  style={{
                    top: `${glassY + yOffset}%`,
                    left: `${finalX}%`,
                    transform: `translate(-50%, -50%) rotate(${finalRotation}deg)`,
                    width: `${finalScale}%`,
                    pointerEvents: isManualAdjust ? 'auto' : 'none',
                    cursor: isManualAdjust ? (isPointerDragging ? 'grabbing' : 'grab') : 'default',
                  }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                >
                  <img
                    className="w-full h-auto filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] brightness-105 pointer-events-none"
                    alt="" src={transparentUrl} draggable={false}
                  />
                </motion.div>
              )}
            </div>

            {isModelLoading && (
              <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center">
                <RefreshCw className="animate-spin text-[#00687a] mb-4" size={32} />
                <p className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">Initializing AR Engine...</p>
              </div>
            )}
            
            {assetState === AssetState.ASSET_LOADING && !isModelLoading && (
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <div className="bg-white/90 dark:bg-black/80 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <RefreshCw className="animate-spin text-[#00687a]" size={14} />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">Loading Frame</span>
                </div>
              </div>
            )}

            {previewRenderFailed && (
              <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 z-30 flex flex-col items-center justify-center p-6 text-center">
                <AlertCircle size={32} className="text-red-500 mb-4" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2">Frame Unavailable</h3>
                <p className="text-xs text-gray-500 max-w-xs mb-6">This frame is not available for virtual try-on at this moment.</p>
                <button onClick={() => {
                  const available = products.find(p => p.tryOnAsset);
                  if (available) setSelectedProduct(available);
                }} className="px-6 py-2.5 bg-[#131b2e] text-white text-xs font-bold uppercase rounded-md tracking-wider">
                  View Available Frames
                </button>
              </div>
            )}
          </div>

          {renderFrameCarousel()}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm">
            <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">Fit Adjustment</h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">Our AR engine automatically places the frames. Use manual adjustment if you need a specific fit.</p>
            
            <div className="grid grid-cols-2 gap-2 mb-6">
              <button
                onClick={() => setIsManualAdjust(false)}
                className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  !isManualAdjust ? 'bg-[#00687a] text-white shadow-md' : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Sparkles size={14} /> Auto Fit
              </button>
              <button
                onClick={() => { setIsManualAdjust(true); setShowAdvancedControls(true); }}
                className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  isManualAdjust ? 'bg-[#00687a] text-white shadow-md' : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Sliders size={14} /> Manual
              </button>
            </div>

            {isManualAdjust && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5 p-5 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  <span>Fine Tuning</span>
                  <button onClick={triggerAutoCalibration} className="text-[#00687a] hover:underline text-[10px]">Reset</button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500"><span>Scale</span><span>{Math.round(userScale * 100)}%</span></div>
                  <input type="range" min="0.5" max="2.0" step="0.01" value={userScale} onChange={(e) => setUserScale(parseFloat(e.target.value))} className="w-full accent-[#00687a]" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500"><span>Vertical Position</span><span>{yOffset}%</span></div>
                  <input type="range" min="-40" max="40" step="0.5" value={yOffset} onChange={(e) => setYOffset(parseFloat(e.target.value))} className="w-full accent-[#00687a]" />
                </div>
              </motion.div>
            )}

            {feedType === 'model' && (
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Select a Model</h4>
                <div className="grid grid-cols-3 gap-3">
                  {VIRTUAL_TRY_ON_FACES.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model)}
                      className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
                        selectedModel.id === model.id ? 'ring-2 ring-[#00687a] ring-offset-2' : 'hover:opacity-80'
                      }`}
                    >
                      <img src={model.url} alt={model.name} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setView('book-test')}
              className="w-full py-4 px-6 bg-[#131b2e] hover:bg-[#202b46] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Book an Appointment <ArrowRight size={14} />
            </button>
            <button
              onClick={() => setView('product-detail')}
              className="w-full py-4 px-6 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors border border-gray-200 dark:border-gray-700"
            >
              View Product Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
