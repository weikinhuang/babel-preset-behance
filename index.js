module.exports = function(context, opts) {
  opts = opts || {};
  var envOpts = opts.env || {};

  if (!envOpts.exclude) {
    envOpts.exclude = ['transform-regenerator'];
  }
  else if (envOpts.exclude.indexOf('transform-regenerator') < 0) {
    envOpts.exclude.push('transform-regenerator');
  }

  if (!('modules' in envOpts)) {
    envOpts.modules = false;
  }

  var config = {
    presets: [
      [require('babel-preset-env'), envOpts],
      require('babel-preset-stage-3'),
    ],
    plugins: [
      [
        require('babel-plugin-transform-es2015-template-literals'), { loose: true },
      ],
    ],
  };

  return config;
};
