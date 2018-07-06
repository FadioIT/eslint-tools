module.exports = {
  extends: ['@fadioit', 'prettier/react'],
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',

    'react/forbid-prop-types': 'off',

    'react/require-default-props': 'off',

    'react/sort-comp': 'off',

    'react/no-multi-comp': 'off',

    'jsx-a11y/anchor-is-valid': 'off',
  },
};
