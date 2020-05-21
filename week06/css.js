var css = require("css");
const rules = [];
function addCSSRules(text) {
  var ast = css.parse(text);
  debugger;
  rules.push(...ast.stylesheet.rules);
}
addCSSRules("#app .video{background:red;font-size:32px}");
console.log("rules", rules);

function specificity(selector) {
  var p = [0, 0, 0, 0];
  var selectorParts = selector.split(" ");
  for (var part of selectorParts) {
    if (part.charAt(0) == "#") {
      p[2] += 1;
    }
  }
}

function computeCSS(element) {
  // 给元素加上CSS样式
  var elements = stack.slice().reverse();
  if (!element.computedStyle) {
    element.computedStyle = {};
  }
  let matched;
  for (let rule of rules) {
    var selectorParts = rule.selectors[0].split(" ").reverse(); // 拆分选择器
    if (!match(element, selectParts[0])) continue; // 如果选择器的最后一个元素不是当前元素，说明此选择器不是当前元素，则跳过

    var j = 1;
    for (var i = 0; i < elements.length; i++) {
      if (match(elements[i], selectorParts[j])) {
        j++;
      }
      if (j >= selectorParts.length) {
        matched = true;
      }
      if (matched) {
        // 如果命中了，就把规则加入到元素上
        var sp = specificity(selectorParts);
        var computedStyle = element.computedStyle;
        for (var declaration of rule.declaration) {
          if (!computedStyle[declaration.property]) {
            computedStyle[declaration.property] = {};
          }
          computedStyle[declaration.property].value = declaration.value;
        }
      }
    }
  }
}
