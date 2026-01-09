/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",     // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static hosting
  },
};

export default nextConfig;
