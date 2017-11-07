var preset = require('..');
var expect = require('chai').expect;

describe('babel-preset-behance', function() {
  describe('when "env" has no options', function() {
    it('should add the env preset without options', function() {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          [require('@babel/preset-env'), {
            exclude: [
              'transform-regenerator',
            ],
            modules: false,
            useBuiltIns: 'entry',
          }],
          [require('@babel/preset-stage-3'), { loose: true }],
        ],
        plugins: [
          [
            require('@babel/plugin-transform-template-literals'), { loose: true },
          ],
        ],
      };
      expect(preset()).to.deep.equal(expected);
    });
  });

  describe('when "env" has options', function() {
    it('should add the env preset passing down empty options', function() {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          [require('@babel/preset-env'), {
            exclude: [
              'transform-regenerator',
            ],
            modules: false,
            useBuiltIns: 'entry',
          }],
          [require('@babel/preset-stage-3'), { loose: true }],
        ],
        plugins: [
          [
            require('@babel/plugin-transform-template-literals'), { loose: true },
          ],
        ],
      };
      expect(preset(null, { env: {} })).to.deep.equal(expected);
    });

    it('should add the env preset passing down exclude option', function() {
      process.env.NODE_ENV = 'production';

      var envOpts = {
        targets: {
          chrome: 55,
        },
        exclude: ['other-exclude'],
      };

      const expected = {
        presets: [
          [require('@babel/preset-env'), {
            targets: {
              chrome: 55,
            },
            exclude: [
              'other-exclude',
              'transform-regenerator',
            ],
            modules: false,
            useBuiltIns: 'entry',
          }],
          [require('@babel/preset-stage-3'), { loose: true }],
        ],
        plugins: [
          [
            require('@babel/plugin-transform-template-literals'), { loose: true },
          ],
        ],
      };
      expect(preset(null, { env: envOpts })).to.deep.equal(expected);
    });

    it('should add the env preset passing down modules option as undefined', function() {
      process.env.NODE_ENV = 'production';

      var envOpts = {
        targets: {
          chrome: 55,
        },
        exclude: ['other-exclude'],
        modules: undefined,
      };

      const expected = {
        presets: [
          [require('@babel/preset-env'), {
            targets: {
              chrome: 55,
            },
            exclude: [
              'other-exclude',
              'transform-regenerator',
            ],
            modules: false,
            useBuiltIns: 'entry',
          }],
          [require('@babel/preset-stage-3'), { loose: true }],
        ],
        plugins: [
          [
            require('@babel/plugin-transform-template-literals'), { loose: true },
          ],
        ],
      };
      expect(preset(null, { env: envOpts })).to.deep.equal(expected);
    });

    it('should only add regenerator in exclude if not included beforehand', function() {
      process.env.NODE_ENV = 'production';

      var envOpts = {
        exclude: ['transform-regenerator'],
      };

      const expected = {
        presets: [
          [require('@babel/preset-env'), {
            exclude: [
              'transform-regenerator',
            ],
            modules: false,
            useBuiltIns: 'entry',
          }],
          [require('@babel/preset-stage-3'), { loose: true }],
        ],
        plugins: [
          [
            require('@babel/plugin-transform-template-literals'), { loose: true },
          ],
        ],
      };
      expect(preset(null, { env: envOpts })).to.deep.equal(expected);
    });
  });
});
