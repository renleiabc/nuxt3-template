module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  overrides: [
    {
      files: '*.html',
      processor: 'vue/.vue'
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    // 添加 Vue 支持
    'plugin:vue/vue3-essential',
    // 标准样式
    'standard',
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    // Disables eslint throwing an error on script setup vue files
    'import/first': 'off',
    'vue/multi-word-component-names': 'off',
    'no-console': 'off'
  }
};
