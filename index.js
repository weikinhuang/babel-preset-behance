module.exports = function(context, opts) {
  opts = opts || {};
  const envOpts = opts.env || {};

  if (envOpts.modules === undefined) {
    envOpts.modules = false;
  }

  if (envOpts.useBuiltIns === undefined) {
    envOpts.useBuiltIns = 'entry';
  }

  const config = {
    presets: [
      [require('@babel/preset-env'), envOpts],
      [require('@babel/preset-stage-3'), { loose: true }],
    ],
    plugins: [
      [
        require('@babel/plugin-transform-template-literals'), { loose: true },
      ],
    ],
  };

  return config;
};
