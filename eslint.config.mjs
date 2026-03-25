import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks'; // [CAMBIO] agregar plugin instalado
import reactRefresh from 'eslint-plugin-react-refresh'; // [CAMBIO] agregar plugin instalado
import prettierPlugin from 'eslint-plugin-prettier'; // [CAMBIO] integrar prettier en eslint

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
      'src/vite-env.d.ts',
      'docs',
      '**.md'
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json'], // [CAMBIO] apuntar a tsconfig.app.json, no al raíz
        tsconfigRootDir: import.meta.dirname, //          tsconfig.json raíz tiene files:[] vacío
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks, // [CAMBIO]
      'react-refresh': reactRefresh, // [CAMBIO]
      prettier: prettierPlugin, // [CAMBIO]
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules, // [CAMBIO] rules-of-hooks + exhaustive-deps
      'react-refresh/only-export-components': 'warn', // [CAMBIO]
      'prettier/prettier': 'warn', // [CAMBIO] reportar diferencias de formato
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off', 
      '@typescript-eslint/typedef': [
  'error',
  {
    parameter: true,           // exige tipo en parámetros de funciones normales
    arrowParameter: true,      // exige tipo en parámetros de arrow functions
  },
],
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: ['function', 'method'],
          format: ['camelCase', 'PascalCase'], // [CAMBIO] PascalCase para componentes funcionales
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
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['UPPER_CASE', 'camelCase', 'PascalCase'], // [CAMBIO] permite componentes y hooks como const
        },
        {
          selector: ['enum', 'enumMember'],
          format: ['UPPER_CASE'],
        },
        {
          selector: 'variable',
          format: ['camelCase'],
          filter: {
            regex: '^[A-Z_]+$',
            match: false,
          },
        },
      ],
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