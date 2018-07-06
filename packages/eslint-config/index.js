module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        tabWidth: 2,
      },
    ],

    'func-names': 'off',

    'no-console': 'warn',

    'global-require': 'off',

    'no-use-before-define': 'off',

    'no-shadow': 'off',

    'no-param-reassign': 'off',

    'new-cap': 'off',

    'no-plusplus': 'off',

    'no-extra-boolean-cast': 'off',

    'no-underscore-dangle': 'off',

    'no-restricted-properties': 'off',

    'no-restricted-globals': 'off',

    'no-prototype-builtins': 'off',

    'no-multi-assign': 'off',

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],

    'import/no-named-as-default': 'off',
  },
};
