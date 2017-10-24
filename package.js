Package.describe({
  summary: 'Okta OAuth flow',
  version: '1.2.0'
});

Package.onUse(function (api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('okta_client.js', 'client');
  api.addFiles('okta_server.js', 'server');

  api.export('Okta');
});