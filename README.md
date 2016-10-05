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
* `browser` (`true` by default) - Enable browser specific presets and transforms

```json
{
  "presets": ["behance", { "browser": true }]
}
```
