# babel-preset-behance [![npm](https://img.shields.io/npm/v/babel-preset-behance.svg)](https://www.npmjs.com/package/babel-preset-behance) [![travis](https://img.shields.io/travis/behance/babel-preset-behance/master.svg)](https://travis-ci.org/behance/babel-preset-behance)

> Babel preset for Behance

## Install

```js
$ npm install --save-dev babel-preset-behance
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["behance"]
}
```

### Via CLI

```sh
$ babel script.js --presets behance
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["behance"]
});
```

## Options

> We currently exclude `transform-regenerator` by default.

* `browser` (`true` by default) - Enable browser specific presets and transforms.
* `env` (undefined by default) - Pass down env options to [babel-preset-env](https://github.com/babel/babel-preset-env). See the [babel-preset-env docs](https://github.com/babel/babel-preset-env#options) for more info.

```json
{
  "presets": ["behance", { "browser": true }]
}
{
  "presets": ["behance", { "browser": false }]
}
{
  "presets": ["behance", {
    "browser": false,
    "env": {
      "targets": {
        "chrome": 55
      }
    }
  }]
}
{
  "presets": ["behance", {
    "browser": false,
    "env": {
      "targets": {
        "node": "current"
      }
    }
  }]
}
```
