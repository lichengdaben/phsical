const path = require('path');

module.exports = {
  module: {
    rules: [
      // 处理svg图标
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',

        include: [
          // 指定svg图标的路径
          path.resolve('./src/icons/svg'),
        ],
        options: {
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
};