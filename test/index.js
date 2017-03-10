var preset = require('..');
var expect = require('chai').expect;

describe('babel-preset-behance', () => {
  it('should default to "browser": true when no target is supplied', () => {
    process.env.NODE_ENV = 'production';

    const expected = {
      presets: [
        [require('babel-preset-env'), {
          exclude: [
            'transform-regenerator'
          ]
        }],
        require('babel-preset-stage-3'),
        require('babel-preset-react')
      ],
      plugins: []
    };
    expect(preset()).to.deep.equal(expected);
  });

  describe('when process env is "test"', () => {
    it('should add babel-plugin-rewire', () => {
      process.env.NODE_ENV = 'test';

      const expected = {
        presets: [
          [require('babel-preset-env'), {
            exclude: [
              'transform-regenerator'
            ]
          }],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-rewire')
        ]
      };
      expect(preset()).to.deep.equal(expected);
    });

    it('should add babel-plugin-istanbul when COVERAGE=1', () => {
      process.env.NODE_ENV = 'test';
      process.env.COVERAGE = '1';

      const expected = {
        presets: [
          [require('babel-preset-env'), {
            exclude: [
              'transform-regenerator'
            ]
          }],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-istanbul').default,
          require('babel-plugin-rewire')
        ]
      };
      expect(preset()).to.deep.equal(expected);
    });

    it('should add babel-plugin-rewire in the correct order', () => {
      process.env.NODE_ENV = 'test';
      process.env.COVERAGE = '1';

      const expected = {
        presets: [
          [require('babel-preset-env'), {
            exclude: [
              'transform-regenerator'
            ]
          }],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-istanbul').default,
          require('babel-plugin-rewire')
        ]
      };
      expect(preset()).to.deep.equal(expected);
    });
  });

  describe('when "browser" is true in options', () => {
    it('should add React preset', () => {
      process.env.NODE_ENV = 'development';

      const expected = {
        presets: [
          [require('babel-preset-env'), {
            exclude: [
              'transform-regenerator'
            ]
          }],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: []
      };
      expect(preset(null, { browser: true })).to.deep.equal(expected);
    });
  });

  describe('when "browser" is false in options', () => {
    it('should not add React preset or transforms', () => {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          [require('babel-preset-env'), {
            exclude: [
              'transform-regenerator'
            ]
          }],
          require('babel-preset-stage-3'),
        ],
        plugins: []
      };
      expect(preset(null, { browser: false })).to.deep.equal(expected);
    });
  });

  describe('when "env" has no options', () => {
    it('should add the env preset without options', () => {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          [require('babel-preset-env'), {
            exclude: [
              'transform-regenerator'
            ]
          }],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: []
      };
      expect(preset()).to.deep.equal(expected);
    });
  });

  describe('when "env" has options', () => {
    it('should add the env preset passing down empty options', () => {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          [require('babel-preset-env'), {
            exclude: [
              'transform-regenerator'
            ]
          }],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: []
      };
      expect(preset(null, { env: {} })).to.deep.equal(expected);
    });

    it('should add the env preset passing down options', () => {
      process.env.NODE_ENV = 'production';

      var envOpts = {
        targets: {
          chrome: 55
        },
        exclude: ['other-exclude']
      };

      const expected = {
        presets: [
          [require('babel-preset-env'), {
            targets: {
              chrome: 55
            },
            exclude: [
              'other-exclude',
              'transform-regenerator'
            ]
          }],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: []
      };
      expect(preset(null, { env: envOpts })).to.deep.equal(expected);
    });
  });
});
