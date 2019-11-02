module.exports = {
    extends: [require.resolve('eslint-config-prettier'), require.resolve('eslint-config-prettier/react')],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                semi: true,
                singleQuote: true,
                trailingComma: 'none',
                tabWidth: 4,
                printWidth: 120,
                useTabs: false,
                bracketSpacing: true,
                jsxBracketSameLine: false
            }
        ]
    }
};
