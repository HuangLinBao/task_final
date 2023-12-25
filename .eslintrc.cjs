module.exports = {
	root: true,
	env: { browser: true, es2020: true, jest: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
	rules: {
		// Include .prettierrc.js rules
		'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
		'no-console': 'off',
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
		'react/react-in-jsx-scope': 'off',
		'import/prefer-default-export': 'off',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
			},
		],
	},
};
