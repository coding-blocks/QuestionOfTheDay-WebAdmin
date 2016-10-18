import app from 'cbqotd/config/environment';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  Parse.initialize(
    app.APP.Parse.appId,
    app.APP.Parse.jsApiId
  );
  Parse.serverURL = app.APP.Parse.url;

}

export default {
  name: 'startup',
  initialize
};
