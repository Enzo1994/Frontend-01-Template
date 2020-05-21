var css = require("css");
const rules = [];
function addCSSRules(text) {
  var ast = css.parse(text);
  debugger;
  rules.push(...ast.stylesheet.rules);
}
addCSSRules("#app .video{background:red;font-size:32px}");
console.log("rules", rules);
