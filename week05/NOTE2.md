# 浏览器工作原理2

## 三、CSS Computing（带computing style的DOM树）
**核心：DOM栈配合CSS复合选择器**

根据CSS属性做layout，如果有layout就能往上画了

浏览器会先收集所有rules，再往所有元素上添加对应rules


> 包：npm install CSS，转换css的ast
```
var css = require('css');
var obj = css.parse
```

### 第一步、收集CSS规则：
> 只收集style里面的文本内容，不考虑link

```js
const rules = []
function addCSSRules(text){
    // 媒体查询写这里
    var ast = css.parse(test);
    rules.push(...ast.stylesheet.rules)
}
```

1. 遇到css标签的时候，把CSS规则保存起来
2. 这里我们调用CSSParser来分析CSS规则
3. 这里主要研究这个库分析出来的CSS规则的格式

### 第二步、添加调用

```js
function computeCSS(element){ // 给元素加上CSS样式
    var elements = stack.slice().reverse();
    if(!element.computedStyle){
        element.computedStyle = {}
    }
    let matched;
    for (let rule of rules){
        var selectorParts = rule.selectors[0].split(" ").reverse() // 拆分选择器
        if(!match(element,selectParts[0])) continue; // 如果选择器的最后一个元素不是当前元素，说明此选择器不是当前元素，则跳过

        var j=1;
        for (var i=0 ; i<elements.length;i++){
            if(match(elements[i],selectorParts[j])){
                j++  
            }
            if(j>=selectorParts.length){
                matched = true
            }
            if(matched){
                // 加入
            }
        }
    }
}

```

1. 当我们创建一个元素的时候，立即计算CSS
2. 理论上，当我们分析一个元素的时候，所有CSS规则已经收集完毕
3. 在真实l浏览器中，

重新CSS计算必造成重排必造成重绘，所以style标签尽量写在所有元素之前

### 第三部、获取父元素序列

> 某一个瞬间，stack里存的就是父元素

>为什么reverse？因为一定是先从当前元素开始计算CSS的
1. 在computCSS函数中，我们**必须知道元素的所有父元素（通过parent去取）**才能判断元素规则是否匹配；
2. 如果使用stack，因为stack从外向内获取，所以需要reverse从内向外计算

### 第四步、拆分选择器：
1. 选择器也要从当前元素向上排列；
2. 复杂选择器

### 第五步
```js
function match(element,selector){  // 匹配当前元素是否匹配到选择器中的其中之一
    if(!selector||!element.attributes) return;
    if(selector.charat(0) == "#"){
        var attr = element.attributes.fileter(attr=>attr.name === "id");
        if(attr&& attr.value === selector.replace("#","")){
            return true;
        }
    } else if(selector.charat(0) == "."){
        var attr = element.attributes.fileter(attr=>attr.name === "class");
        if(attr&& attr.value === selector.replace(".","")){
            return true;
        }
    } else if(selector.charat(0) == "#"){
        var attr = element.attributes.fileter(attr=>attr.name === "id");
        if(attr&& attr.value === selector.replace(".","")){
            return true;
        }
    }
    return false;
}
```

1. 根据选择器的类型

第六步、
1. 一旦匹配，就把样式应用到元素上，双循环算法

> 关于declaration：一条key:value就是declaration
```js
function computeCSS(element){ // 给元素加上CSS样式
    var elements = stack.slice().reverse();
    if(!element.computedStyle){
        element.computedStyle = {}
    }
    let matched;
    for (let rule of rules){
        var selectorParts = rule.selectors[0].split(" ").reverse() // 拆分选择器
        if(!match(element,selectParts[0])) continue; // 如果选择器的最后一个元素不是当前元素，说明此选择器不是当前元素，则跳过

        var j=1;
        for (var i=0 ; i<elements.length;i++){
            if(match(elements[i],selectorParts[j])){
                j++  
            }
            if(j>=selectorParts.length){
                matched = true
            }
            if(matched){
                // 如果命中了，就把规则加入到元素上
                var computedStyle = element.computedStyle;
                for(var declaration of rule.declaration){
                    if(!computedStyle[declaration.property]){
                        computedStyle[declaration.property] = {}
                    }
                    computedStyle[declaration.property].value = declaration.value
                }
            }
        }
    }
}
```
### 第七步、确定层叠关系：
> 关于优先级：  
>1. 优先级大于顺序
>2. important只在hotfix时候实在找不到原因时候使用

```js
function specificity(selector){
    var p = [0, 0, 0, 0]
    var selectorParts = selector.split(" ");
    for(var part of selectorParts){
        if(part.charAt(0) == "#"){
            p[2] += 1
        }
    }
}
function compare(){

}
```

```js
function computeCSS(element){ // 给元素加上CSS样式
    var elements = stack.slice().reverse();
    if(!element.computedStyle){
        element.computedStyle = {}
    }
    let matched;
    for (let rule of rules){
        var selectorParts = rule.selectors[0].split(" ").reverse() // 拆分选择器
        if(!match(element,selectParts[0])) continue; // 如果选择器的最后一个元素不是当前元素，说明此选择器不是当前元素，则跳过

        var j=1;
        for (var i=0 ; i<elements.length;i++){
            if(match(elements[i],selectorParts[j])){
                j++  
            }
            if(j>=selectorParts.length){
                matched = true
            }
            if(matched){
                // 如果命中了，就把规则加入到元素上
                var sp =  specificity(selectorParts)
                var computedStyle = element.computedStyle;
                for(var declaration of rule.declaration){
                    if(!computedStyle[declaration.property]){
                        computedStyle[declaration.property] = {}
                    }
                    computedStyle[declaration.property].value = declaration.value
                }
            }
        }
    }
}
```

**成长带动晋升**

# slice函数特殊功能：
1. 两个参数，切片 不影响原数组，如果不传参数，相当于复制一个数组出来

