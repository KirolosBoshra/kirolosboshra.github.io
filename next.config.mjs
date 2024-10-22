/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Ensures that next export works
  basePath: '/', // Set the base path to match your GitHub repo name
  assetPrefix: '/', // Set asset prefix for static files
};

export default nextConfig;
