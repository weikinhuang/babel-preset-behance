# babel-preset-behance

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
