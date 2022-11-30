/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@next/next/recommended',
    'plugin:cypress/recommended',
    'next/core-web-vitals',
    'next',
  ],
  env: {
    browser: true,
    commonjs: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  globals: {
    cy: true,
  },
  plugins: ['jest', 'sonarjs', 'prettier', 'import', 'unused-imports', '@typescript-eslint', 'prefer-arrow', 'cypress'],
  root: true,
  parserOptions: {
    project: ['tsconfig.json'],
    sourceType: 'module', // Allows for the use of imports
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['node_modules/**', '.eslintrc.js', '*.js'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn', // temporary
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'global-require': 'off',
    'no-case-declarations': 'off',
    'no-console': 'warn',
    'no-else-return': 'error',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'require-await': 'off',
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-duplicate-string': 'warn', // temporary
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-identical-functions': 'warn', // temporary
    'sonarjs/prefer-immediate-return': 'error',
    'unused-imports/no-unused-imports': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = eslintConfig
