const req = require.context("../src", true, /\.story.jsx?$/);

export function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
