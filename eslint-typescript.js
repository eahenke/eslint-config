module.exports = {
    extends: ['./rules/base.js', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
