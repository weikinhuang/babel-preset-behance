module.exports = function(context, opts) {
  var env = process.env.BABEL_ENV || process.env.NODE_ENV;
  opts = opts || {};
  var browser = opts.browser !== false;
  var envOpts = opts.env;

  var envPreset = envOpts ? [require('babel-preset-env'), envOpts] : require('babel-preset-env');

  var config = {
    presets: [
      envPreset,
      require('babel-preset-stage-3')
    ],
    plugins: [
      require('babel-plugin-add-module-exports')
    ]
  };

  if (env === 'test') {
    config.plugins.push(require('babel-plugin-istanbul').default);
  }

  if (browser) {
    config.presets.push(require('babel-preset-react'));

    if (env === 'production') {
      config.plugins.push.apply(config.plugins, [
        // https://github.com/facebookincubator/create-react-app/issues/525
        // require('babel-plugin-transform-react-constant-elements'),
        require('babel-plugin-transform-react-inline-elements'),
        require('babel-plugin-transform-react-remove-prop-types').default
      ]);
    }
  }

  return config;
};
