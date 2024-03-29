module.exports = {
    plugins: ['react', 'react-hooks'],
    extends: ['plugin:react/recommended'],
    parserOptions: {
        jsx: true
    },
    settings: {
        react: {
            pragma: 'React',
            version: '16.0'
        }
    },
    rules: {
        'jsx-quotes': [2, 'prefer-double'],
        'react/display-name': 2,
        'react/forbid-prop-types': 1,
        'react/jsx-boolean-value': [2, 'always'],
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-equals-spacing': 2,
        'react/jsx-indent': 1,
        'react/jsx-indent-props': 2,
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': 0,
        'react/jsx-no-bind': 0,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 0,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-sort-props': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-multi-comp': 0,
        'react/no-unknown-property': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/self-closing-comp': 2,
        'react/sort-prop-types': 2,
        'react/no-unused-prop-types': 2,
        'react/no-string-refs': 2,
        'react-no-unescaped-entities': 0,
        'react/sort-comp': [
            2,
            {
                order: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount',
                    '/^on.+$/',
                    '/^get.+$/',
                    '/^render.+$/',
                    'render'
                ]
            }
        ],
        'react/prefer-stateless-function': 1,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2
    }
};
