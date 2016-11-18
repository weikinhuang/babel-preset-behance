var preset = require('..');
var expect = require('chai').expect;

describe('babel-preset-behance', () => {
  it('should default to "browser": true when no target is supplied', () => {
    process.env.NODE_ENV = 'production';

    const expected = {
      presets: [
        require('babel-preset-env'),
        require('babel-preset-stage-3'),
        require('babel-preset-react')
      ],
      plugins: [
        require('babel-plugin-add-module-exports'),
        require('babel-plugin-transform-react-inline-elements'),
        require('babel-plugin-transform-react-remove-prop-types').default
      ]
    };
    expect(preset()).to.deep.equal(expected);
  });

  describe('when process env is "test"', () => {
    it('should add babel-plugin-istanbul', () => {
      process.env.NODE_ENV = 'test';

      const expected = {
        presets: [
          require('babel-preset-env'),
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-add-module-exports'),
          require('babel-plugin-istanbul').default
        ]
      };
      expect(preset()).to.deep.equal(expected);
    });
  });

  describe('when "browser" is true in options', () => {
    it('should add React preset but not the transforms when process env is not "production"', () => {
      process.env.NODE_ENV = 'development';

      const expected = {
        presets: [
          require('babel-preset-env'),
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-add-module-exports')
        ]
      };
      expect(preset(null, { browser: true })).to.deep.equal(expected);
    });

    it('should add React preset and transforms when process env is "production"', () => {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          require('babel-preset-env'),
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-add-module-exports'),
          require('babel-plugin-transform-react-inline-elements'),
          require('babel-plugin-transform-react-remove-prop-types').default
        ]
      };
      expect(preset(null, { browser: true })).to.deep.equal(expected);
    });
  });

  describe('when "browser" is false in options', () => {
    it('should not add React preset or transforms', () => {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          require('babel-preset-env'),
          require('babel-preset-stage-3'),
        ],
        plugins: [
          require('babel-plugin-add-module-exports'),
        ]
      };
      expect(preset(null, { browser: false })).to.deep.equal(expected);
    });
  });

  describe('when "env" has no options', () => {
    it('should add the env preset without options', () => {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          require('babel-preset-env'),
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-add-module-exports'),
          require('babel-plugin-transform-react-inline-elements'),
          require('babel-plugin-transform-react-remove-prop-types').default
        ]
      };
      expect(preset()).to.deep.equal(expected);
    });
  });

  describe('when "env" has options', () => {
    it('should add the env preset passing down empty options', () => {
      process.env.NODE_ENV = 'production';

      const expected = {
        presets: [
          [require('babel-preset-env'), {}],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-add-module-exports'),
          require('babel-plugin-transform-react-inline-elements'),
          require('babel-plugin-transform-react-remove-prop-types').default
        ]
      };
      expect(preset(null, { env: {} })).to.deep.equal(expected);
    });

    it('should add the env preset passing down options', () => {
      process.env.NODE_ENV = 'production';

      var envOpts = {
        targets: {
          chrome: 55
        }
      };

      const expected = {
        presets: [
          [require('babel-preset-env'), envOpts],
          require('babel-preset-stage-3'),
          require('babel-preset-react')
        ],
        plugins: [
          require('babel-plugin-add-module-exports'),
          require('babel-plugin-transform-react-inline-elements'),
          require('babel-plugin-transform-react-remove-prop-types').default
        ]
      };
      expect(preset(null, { env: envOpts })).to.deep.equal(expected);
    });
  });
});
