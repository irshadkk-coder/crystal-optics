import React from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, ShieldCheck, Smartphone, Target, Code, CheckCircle, ArrowRight } from 'lucide-react';

interface PortfolioViewProps {
  setView: (v: string) => void;
}

export default function PortfolioView({ setView }: PortfolioViewProps) {
  const technologies = [
    { name: 'React 19', description: 'Core UI framework for seamless rendering and reactive state.', icon: <Code size={20} /> },
    { name: 'Vite', description: 'Lightning fast development and optimized production bundling.', icon: <Zap size={20} /> },
    { name: 'Tailwind CSS v4', description: 'Utility-first styling with modern responsive design principles.', icon: <Layers size={20} /> },
    { name: 'MediaPipe FaceLandmarker', description: 'Real-time AI tracking for the virtual try-on experience.', icon: <Target size={20} /> },
  ];

  const features = [
    { title: 'Virtual Try-On', description: 'Live AR tracking allowing users to see how frames look on their face in real-time or via static models.' },
    { title: 'Dynamic Product Catalog', description: 'Interactive shopping experience with filtering, favorites, and detailed specifications.' },
    { title: 'Eye Examination Booking', description: 'A structured wizard for booking in-person consultations, reducing friction in customer acquisition.' },
    { title: 'Responsive Design', description: 'Perfectly optimized for mobile, tablet, and desktop environments to capture all customer segments.' }
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
        <span className="font-label-technical text-xs text-[#00687a] dark:text-[#acedff] uppercase tracking-widest font-bold mb-4 block">
          Project Showcase
        </span>
        <h1 className="font-display-lg text-4xl md:text-5xl font-bold text-[#131b2e] dark:text-white tracking-tight mb-6">
          Crystal Optics eCommerce Platform
        </h1>
        <p className="font-body-md text-[#45464d] dark:text-gray-300 text-lg leading-relaxed">
          A premium, full-stack demonstration of modern web development capabilities. Designed to convert visitors into loyal customers through high-end aesthetics and advanced AI features.
        </p>
      </section>

      {/* Grid: Features & Tech */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* Features Block */}
        <div className="bg-gray-50 dark:bg-[#131b2e]/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h2 className="font-display-lg text-2xl font-bold text-[#131b2e] dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Core Features Implemented
          </h2>
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="flex gap-4"
              >
                <CheckCircle className="text-[#00687a] dark:text-[#acedff] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Block */}
        <div className="bg-[#131b2e] text-white p-8 rounded-2xl shadow-xl">
          <h2 className="font-display-lg text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
            Technologies Used
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technologies.map((tech, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-[#acedff] mb-3">{tech.icon}</div>
                <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Business Benefits Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-[#131b2e] rounded-3xl p-10 md:p-16 border border-gray-200 dark:border-gray-800 text-center max-w-5xl mx-auto">
        <ShieldCheck className="mx-auto text-[#00687a] dark:text-[#acedff] mb-6" size={48} />
        <h2 className="font-display-lg text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Business Value Delivered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">Increased Conversion</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Virtual try-on capabilities significantly reduce buyer hesitation, directly leading to higher sales conversion rates and lower return rates.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">Brand Authority</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              A premium, lightning-fast UI establishes trust and positions the brand as a high-end market leader.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">Operational Efficiency</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Integrated appointment booking and seamless catalog management reduce administrative overhead.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-20 text-center">
        <button 
          onClick={() => setView('home')}
          className="inline-flex items-center gap-2 bg-[#131b2e] hover:bg-slate-800 text-white px-8 py-4 rounded-full font-label-technical text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Return to Experience <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
}
