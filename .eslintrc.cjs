module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Добавляем правило @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all', // Проверяем все переменные
        args: 'none', // Не проверяем параметры функций
        ignoreRestSiblings: true, // Игнорируем остаточные операторы
      },
    ],
  },
};

