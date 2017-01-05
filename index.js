module.exports = function(context, opts) {
  var env = process.env.BABEL_ENV || process.env.NODE_ENV;
  opts = opts || {};
  var browser = opts.browser !== false;
  var envOpts = opts.env || {};

  if (!envOpts.exclude) {
    envOpts.exclude = ['transform-regenerator'];
  }
  else {
    envOpts.exclude.push('transform-regenerator');
  }

  var config = {
    presets: [
      [require('babel-preset-env'), envOpts],
      require('babel-preset-stage-3')
    ],
    plugins: []
  };

  if (env === 'test') {
    config.plugins.push(require('babel-plugin-istanbul').default);
  }

  if (browser) {
    config.presets.push(require('babel-preset-react'));
  }

  return config;
};
