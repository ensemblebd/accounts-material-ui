import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'material-ui': '>=0.16.x'
}, 'sampleapp:accounts-material-ui');

const MaterialUI = require('material-ui');
