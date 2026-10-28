/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/shop', destination: '/eyeglasses', permanent: true },
      { source: '/catalog', destination: '/eyeglasses', permanent: true },
      { source: '/boutiques', destination: '/contact', permanent: true },
      { source: '/try-on', destination: '/virtual-try-on', permanent: true },
      { source: '/book-test', destination: '/eye-test', permanent: true },
      { source: '/wholesale', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
