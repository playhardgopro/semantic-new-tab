const indentRule = ['error', 'tab', {
	SwitchCase: 1,
}]

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		es6: true,
	},
	plugins: [
		'@typescript-eslint',
		'compat',
		'import',
		'react',
		'jsx-a11y',
		'unicorn',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:compat/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:import/recommended',
		'plugin:react/recommended',
	],
	rules: {
		// indent
		indent: indentRule,
		'@typescript-eslint/indent': indentRule,

		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],

		// typescript
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'none',
			},
		}],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',

		// import
		'import/no-unresolved': ['error', {
			ignore: [
				'\\?module$',
			],
		}],
		'import/order': ['error', {
			'newlines-between': 'always',
		}],

		// jsx
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/display-name': 'off',
		'react/no-string-refs': 'off',
		'react/no-unknown-property': 'off',
		'react/jsx-wrap-multilines': ['error', {
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
		}],
		'react/jsx-max-props-per-line': ['error', {
			maximum: 2,
		}],
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-closing-bracket-location': 'error',
		'react/jsx-one-expression-per-line': ['error', {
			allow: 'literal',
		}],
		'react/jsx-max-depth': ['error', {
			max: 5,
		}],
		'react/jsx-curly-spacing': ['warn', 'never'],
		'react/sort-comp': ['warn', {
			order: [
				'static-methods',
				'instance-variables',
				'lifecycle',
				'getters',
				'setters',
				'everything-else',
				'render',
			],
			groups: {
				lifecycle: [
					'name',
					'beforeCreate',
					'created',
					'beforeMount',
					'mounted',
					'beforeUpdate',
					'updated',
					'beforeDestroy',
					'destroyed',
				],
			},
		}],
		'jsx-quotes': ['error', 'prefer-double'],

		// jsx/a11y
		'jsx-a11y/alt-text': [2, {
			'elements': ['img', 'object', 'area', 'input[type="image"]'],
			'img': ['Image'],
			'object': ['Object'],
			'area': ['Area'],
			'input[type="image"]': ['InputImage'],
		}],

		// whitespace
		'no-whitespace-before-property': 'error',
		'key-spacing': ['error', {
			beforeColon: false,
			afterColon: true,
		}],
		'space-before-blocks': 'error',
		'arrow-spacing': 'error',
		'space-infix-ops': ['error', {
			int32Hint: false,
		}],
		'comma-spacing': 'error',
		'object-curly-spacing': ['error', 'always'],
		'no-trailing-spaces': 'error',

		// newline
		'function-paren-newline': ['error', 'multiline'],
		'function-call-argument-newline': ['error', 'consistent'],
		'object-curly-newline': ['error', {
			ObjectExpression: {
				multiline: true,
				minProperties: 1,
			},
			ObjectPattern: {
				multiline: true,
				minProperties: 1,
			},
		}],
		'object-property-newline': ['error', {
			allowAllPropertiesOnSameLine: false,
		}],

		'no-unneeded-ternary': 'error',
		'no-else-return': 'error',

		'unicorn/filename-case': ['warn', {
			'case': 'kebabCase',
		}],
	},
	overrides: [
		{
			files: [
				'scripts/*',
				'_templates/**',
				'*.js',
			],
			env: {
				node: true,
			},
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'no-console': 'off',
			},
		},
	],
	settings: {
		// 'import/resolver': {
		// 	'typescript': {},
		// },
		react: {
			pragma: 'h',
			version: '16.0',
		},
	},
}
