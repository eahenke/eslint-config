module.exports = {
    plugins: ['jsx-a11y'],
    extends: ['plugin:jsx-a11y/recommended'],
    rules: {
        'jsx-a11y/accessible-emoji': 1,
        'jsx-a11y/alt-text': 1,
        'jsx-a11y/anchor-has-content': 1,
        'jsx-a11y/anchor-is-valid': 1,
        'jsx-a11y/aria-activedescendant-has-tabindex': 1,
        'jsx-a11y/aria-props': 1,
        'jsx-a11y/aria-proptypes': 1,
        'jsx-a11y/aria-unsupported-elements': 1,
        'jsx-a11y/click-events-have-key-events': 1,
        'jsx-a11y/control-has-associated-label': [
            'off',
            {
                ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
                ignoreRoles: [
                    'grid',
                    'listbox',
                    'menu',
                    'menubar',
                    'radiogroup',
                    'row',
                    'tablist',
                    'toolbar',
                    'tree',
                    'treegrid'
                ],
                includeRoles: ['alert', 'dialog']
            }
        ],
        'jsx-a11y/heading-has-content': 1,
        'jsx-a11y/html-has-lang': 1,
        'jsx-a11y/iframe-has-title': 1,
        'jsx-a11y/img-redundant-alt': 1,
        'jsx-a11y/interactive-supports-focus': [
            1,
            {
                tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox']
            }
        ],
        'jsx-a11y/label-has-associated-control': 1,
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/media-has-caption': 1,
        'jsx-a11y/mouse-events-have-key-events': 1,
        'jsx-a11y/no-access-key': 1,
        'jsx-a11y/no-autofocus': 1,
        'jsx-a11y/no-distracting-elements': 1,
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
            1,
            {
                tr: ['none', 'presentation']
            }
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
            1,
            {
                handlers: [
                    'onClick',
                    'onError',
                    'onLoad',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp'
                ],
                alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
                body: ['onError', 'onLoad'],
                dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
                iframe: ['onError', 'onLoad'],
                img: ['onError', 'onLoad']
            }
        ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
            1,
            {
                ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
                ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
                li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
                table: ['grid'],
                td: ['gridcell']
            }
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
            1,
            {
                tags: [],
                roles: ['tabpanel'],
                allowExpressionValues: true
            }
        ],
        'jsx-a11y/no-onchange': 1,
        'jsx-a11y/no-redundant-roles': 1,
        'jsx-a11y/no-static-element-interactions': [
            1,
            {
                allowExpressionValues: true,
                handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
            }
        ],
        'jsx-a11y/role-has-required-aria-props': 1,
        'jsx-a11y/role-supports-aria-props': 1,
        'jsx-a11y/scope': 1,
        'jsx-a11y/tabindex-no-positive': 1
    }
};
