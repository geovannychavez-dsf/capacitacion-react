import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default defineConfig(
  {
    ignores: [
      'dist',
      'node_modules',
      'vite.config.ts',
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.node.json',
      '*.json',
      'eslint.config.mjs',
      'package.json',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    "extends": ["@commitlint/config-conventional"],
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      '@typescript-eslint/naming-convention': [
        'warn',
        // 1. PascalCase: Clases, interfaces, tipos (typeLike)
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        // 2. camelCase: Funciones y Métodos
        {
          selector: ['function', 'method'],
          format: ['camelCase'],
        },
        {
          selector: 'function',
          modifiers: ['exported'],
          format: ['PascalCase'],
          filter: {
            regex: '^[A-Z]',
            match: true,
          },
        },
        // 3. UPPER_CASE: Constantes (variables con modificador 'const')
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['UPPER_CASE'],
        },
        // 4. UPPER_CASE: Enums y sus miembros
        {
          selector: ['enum', 'enumMember'],
          format: ['UPPER_CASE'],
        },
        // 5. camelCase: Variables (que no sean constantes)
        {
          selector: 'variable',
          format: ['camelCase'],
          // Excluimos las que ya capturamos como constantes arriba
          filter: {
            regex: '^[A-Z_]+$',
            match: false,
          },
        },
      ],
      'react/jsx-pascal-case': 'error',
    },
    rules: {
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
    },
  },
);
