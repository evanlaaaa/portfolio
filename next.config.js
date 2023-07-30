/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/portfolio': { page: '/' },
      '/barter': { page: '/barter' }
    }
  },
}


module.exports = nextConfig
