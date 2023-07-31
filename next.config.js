/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/portfolio',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/portfolio': { page: '/' },
      '/project': { page: '/project' },
      '/barter': { page: '/barter' }
    }
  },
}


module.exports = nextConfig
