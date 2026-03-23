import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    ecmaVersion: "latest",
    rules: {
      "no-console": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-call": "error", // Asegúrate de que esta regla esté habilitada
      "no-console": "warn",
      "@typescript-eslint/naming-convention": [
        "warn",
        // 1. PascalCase: Clases, interfaces, tipos (typeLike)
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        // 2. camelCase: Funciones y Métodos
        {
          selector: ["function", "method"],
          format: ["camelCase"],
        },
        // 3. UPPER_CASE: Constantes (variables con modificador 'const')
        {
          selector: "variable",
          modifiers: ["const"],
          format: ["UPPER_CASE"],
        },
        // 4. UPPER_CASE: Enums y sus miembros
        {
          selector: ["enum", "enumMember"],
          format: ["UPPER_CASE"],
        },
        // 5. camelCase: Variables (que no sean constantes)
        {
          selector: "variable",
          format: ["camelCase"],
          // Excluimos las que ya capturamos como constantes arriba
          filter: {
            regex: "^[A-Z_]+$",
            match: false,
          },
        },
      ],
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "no-console": "warn",
      "prettier/prettier": ["off", { endOfLine: "auto" }],
    },
  },
]);
