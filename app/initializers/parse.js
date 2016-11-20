export function initialize(app) {
  Parse.initialize(app.Parse.appId, app.Parse.jsApiId);
  Parse.serverURL = app.Parse.url;
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'parse',
  initialize
};
