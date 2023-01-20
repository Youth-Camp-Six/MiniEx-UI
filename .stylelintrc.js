module.exports = {
  'extends': [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-rational-order'
  ],
  'plugins': ['stylelint-less'],
  'rules': {
    'selector-type-no-unknown': null,
    'selector-pseudo-class-allowed-list': null,
  },
  ignoreFiles: [
    '**/dist/**',
    '**/es/**',
    '**/lib/**',
    '**/node_modules/**',
    '**/coverage/**',
    '**/packages/**',
  ],
  "overrides": [
    {
      "files": ["**/*.less"],
      "customSyntax": "postcss-less"
    },
  ]
};
