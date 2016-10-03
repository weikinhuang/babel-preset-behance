var env = process.env.BABEL_ENV || process.env.NODE_ENV;

module.exports = {
  presets: [
    require("babel-preset-latest"),
    require("babel-preset-react"),
    require("babel-preset-stage-3")
  ],
  plugins: [
    require("babel-plugin-add-module-exports")
  ]
};

var plugins = module.exports.plugins;
if (env === 'test') {
  plugins.push.apply(plugins, [
    require('babel-plugin-istanbul')['default']
  ]);
}
if (env === 'production') {
  plugins.push.apply(plugins, [
    // https://github.com/facebookincubator/create-react-app/issues/525
    // require('babel-plugin-transform-react-constant-elements'),
    require('babel-plugin-transform-react-inline-elements'),
    require('babel-plugin-transform-react-remove-prop-types')['default']
  ]);
}
