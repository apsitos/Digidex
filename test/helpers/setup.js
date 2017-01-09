require('babel-register')({
  presets: ["react", "es2015"]
});
require('babel-polyfill')

global.document = require('jsdom').jsdom(
  "<head> <meta charset='UTF-8'></head><div id='application'></div>"
)

global.window = document.defaultView
global.navigator = window.navigator

if (!global.window.localStorage) {
 localStorage = {
   getItem() { return '[]'; },
   setItem() {}
 }
}
