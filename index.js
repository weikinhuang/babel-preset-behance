module.exports = {
  presets: [
    require("babel-preset-react"),
    require("babel-preset-stage-3")
  ],
  plugins: [
    require("babel-plugin-add-module-exports"),
    require("babel-plugin-transform-es2015-modules-commonjs"),
    require("babel-plugin-syntax-trailing-function-commas")
  ],
  "env": {
    "production": {
      presets: [
        require("babel-preset-es2015")
      ],
      "plugins": [
        require('babel-plugin-transform-react-constant-elements'),
        require('babel-plugin-transform-react-inline-elements'),
        require('babel-plugin-transform-react-remove-prop-types')['default']
      ]
    }
  }
};
