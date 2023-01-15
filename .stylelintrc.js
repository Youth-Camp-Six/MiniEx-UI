module.exports = {
  'extends': [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
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
  ],
  "overrides": [
    {
      "files": ["**/*.less"],
      "customSyntax": "postcss-less"
    },
  ]
};
