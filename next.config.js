const path = require('path');
const withReactSvg = require('next-react-svg');

module.exports = withReactSvg({
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/home/Home' },
      '/:id': { page: '/home/Home' },
    };
  },
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config;
  },
});
