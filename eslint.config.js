// @ts-check
// Enable TypeScript type-checking for this config file itself.

// PLUGINS & PARSERS IMPORT

const prettierPlugin = require('eslint-plugin-prettier');
// Run Prettier inside ESLint (optional — error squiggles)

const typescriptParser = require('@typescript-eslint/parser');
// Let ESLint understand TypeScript

const tsPlugin = require('@typescript-eslint/eslint-plugin');
// Recommended TypeScript linting rules

const angularPlugin = require('@angular-eslint/eslint-plugin');
// Angular-specific best practices

const angularTemplateParser = require('@angular-eslint/template-parser');
// Lint Angular HTML templates

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
// Recommended Prettier integration (safe)

// ESLint CONFIGURATION START

module.exports = [
  // STEP 1 — Totally Ignore These Folders
  {
    ignores: ['.cache/', '.git/', '.github/', 'node_modules/', 'dist/', 'coverage/'],
  },

  // STEP 2 — TypeScript Rules
  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angularPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      // Recommended Defaults
      ...tsPlugin.configs.recommended.rules,
      ...angularPlugin.configs.recommended.rules,
      ...prettierPlugin.configs?.rules,

      // Angular Naming Conventions
      '@angular-eslint/directive-selector': [
        'warn',
        {
          type: 'attribute',
          prefix: ['app'],
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['app'],
          style: 'kebab-case',
        },
      ],

      // Angular Architecture / Clean Code
      '@angular-eslint/prefer-on-push-component-change-detection': 'error', // Enforce OnPush strategy
      '@angular-eslint/sort-lifecycle-methods': 'error', // Enforce consistent hook ordering

      // Real-World DX Friendly Relaxations
      'import/order': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@angular-eslint/no-host-metadata-property': 'off',
      '@angular-eslint/no-output-on-prefix': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
    },
  },

  // STEP 3 — Angular HTML Templates Rules
  {
    files: ['**/*.html'],

    languageOptions: {
      parser: angularTemplateParser,
    },

    plugins: {
      '@angular-eslint': angularPlugin,
      '@angular-eslint/template': angularPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': ['error', { parser: 'angular' }],

      // Angular Template Best Practices (from your work config)
      '@angular-eslint/template/prefer-ngsrc': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/attributes-order': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
    },
  },

  // STEP 4 — Prettier Integration
  eslintPluginPrettierRecommended,
];
