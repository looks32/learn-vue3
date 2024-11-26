import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    env: {
      'browser': true,
      'node': true,
      'es6': true,
      'vue/setup-compiler-macros': true,
    },
    parseOptions: {
      'ecmaVersion': '2020',
      'sourceType': 'module',
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
