import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginJest from 'eslint-plugin-jest'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    },
    plugins: {
      prettier: pluginPrettier,
      jest: pluginJest,
      react: pluginReact
    },
    rules: {
      ...prettierConfig.rules,
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ]
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
