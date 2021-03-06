// var path = require('path');

// module.exports = {
// 	entry: ['webpack/hot/dev-server',path.resolve(__dirname,'app/main.js')],
// 	output: {
// 		path: path.resolve(__dirname,'build'),
// 		filename: 'bundle.js'
// 	}
// };

var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
    }]
  }
};

module.exports = config;


// var path = require('path');
// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
//
// config = {
//   entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
//   resolve: {
//     alias: {
//       'react': pathToReact
//     }
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: /\.jsx?$/,
//       loader: 'babel'
//     }],
//     noParse: [pathToReact]
//   }
// };
//
// module.exports = config;