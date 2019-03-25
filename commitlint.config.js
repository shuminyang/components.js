module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-full-stop': [2, 'never'],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'upper-case'],
    'scope-enum': [
			2,
			'always',
      [
        'BASE',
      ],
    ],
    'type-case': [2, 'always', 'upper-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
        'ENHANCEMENT',
				'DOCS',
				'FEATURE',
				'FIX',
				'PERFORMANCE',
				'REFACTOR',
				'REVERT',
				'STYLE',
				'TEST'
			]
		]
  }
};
