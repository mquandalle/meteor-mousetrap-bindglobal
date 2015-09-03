Package.describe({
  name: 'mquandalle:mousetrap-bindglobal',
  version: '0.0.1',
  summary: 'A wrapper a moustrap bindglobal plugin',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.use('mousetrap:mousetrap@1.4.6', 'client');
  api.addFiles('bindglobal.js', 'client');
});
