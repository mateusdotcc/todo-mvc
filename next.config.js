module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/home/Home' },
      '/:id': { page: '/home/Home' },
    };
  },
};
