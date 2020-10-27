Package.describe({
  name: 'zetoff:accounts-material-ui',
  version: '0.0.13',
  // Brief, one-line summary of the package.
  summary: 'Material-UI - Accounts UI for React in Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ensemblebd/accounts-material-ui',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.11.1');
  api.use('ecmascript');
	api.use('std:accounts-ui');
	api.use('tmeasday:check-npm-versions@0.3.1');

	api.imply('session');

	api.addFiles('check_npm.js', ['client', 'server']);

  api.mainModule('main.jsx');
});
