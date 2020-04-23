# 字符：

1. 每个字符都有对应的码点
2. unicode 是分段的，里面还分 block，比如 emoji 的 block
3. U+4E00 - U+9FFF 块:CJK 主 block

## ASCII:

1. ASDII 字符一共 128 个
2. 在其他绝大多数字符集里面都得以保留，在 unicode 里面属于 basic latin block

## unicode:

1. U+0007 bell 会响一声
2. LF- line feed U+000A
3. SPACE U+0020
4. FF- Form Feed U+000C ：翻页

CJK 中日韩字符是一起的 导致 Unicode 判断中文不准确

### UTF-8:
🌶 UTF-8:\xF0\x9F\x8C\xB6   UTF-16:\uD83C\uDF36

### 关于BMP：
16 进制以内叫基本字符平面（bmp），安全使用

JS string 只能处理 bmp 字符内，超了就得用 fromCodePoint、codePointAt
`"厉害".codePointAt(0) // \u5489`

**查看字符码点：codePointAt**
中文:\u5489 , \u5bbf
Emoji 就是 bmp 以外的字符

# Js 可输入类型：

1. WhiteSpace
2. LineTerminator
3. Comment
4. Token - 一切有效的都叫 Token
   Token 和 word 不一样 1. punctuator 2. identifierName 1. keywords 2. identifier ：ID*start：\$ * \ 3. Future Reserved（预留，只剩 enum） 3. Literal

## WhiteSpace：

### 关于 tab：

1. tab 是有一个字符的: \t
2. 有缺点：
3. 多个 tab 处理文本会非常麻烦

### 关于 NBSP：

1. 码点 U+00A0
2. 效果：还产生分词效果
3. **html 中默认换行是一个单词一断，如果用&nbsp;代替，则不会换行**
4. 重点在处理排版上

### 关于 ZWNBSP：

1. 意思：Zero Width No-break space 零宽断言

## LineTerminator:

### CR:carrage Return U+000A \r

### LF:Line Feed U+000D \n

windows 下会有\r\n，git 会转换  
JavaScript 代码要在 bmp 之内

### BOM（Bit Order Mask）

ascii 码转 16 进制 ，就可以用\u 使用
`"*".codePointAt(0).toString(16) // 2a => \u002a`

## Token:

### Identifier 标识符（变量名属性名函数名）:

1. 用作变量名部分：变量名不能和关键字重合
2. 用作属性部分：属性名可以和关键字重合
3. 不是关键字但是起到关键字的作用

```js
{
    get a(){}
}
```

4. 早期 JS 属性名不能和属性名重合：
   `document.body.className`
5. undefined 没有设置成关键字

### Literal：

#### 1. Number：

IEEE 754 Double Float

1. Float64Array(1):
2. Unit8Array(1)
3. 为什么 0.1+0.1!=0.3

   ```js
   var a = 0.1;
   var n = 0.2;

   const memory = new Float64Array(1);
   memory[0] = a;

   const intArr = new Unit8Array(memory.buffer);
   ```

4. 整数型：
   1. 八进制：0o11
   2. 二进制：0b01
   3. 十六进制：0x001
      /-{0,1}\d*\.\d*/ => 作业 1
5. 浮点型： 1. parseInt 小心 09 坑 2. 浮点数 的比较通过判断 Number.EPSILON，如果小于 EPSILON 即可视为相等
   `Math.abs(0.1+0.2-0.3) <= Number.EPSILON`

最佳实践：一律转换为整数再比较

6. `97 .toString(2)`， 为什么写 97 空格点 `97.`是合法整数，`97`就不是合法整数

#### 2. String：

1. 字符集：

   - ASCII：码点都是固定的
   - UNICODE：
     1. UCS U+0000 - U+FFFF( 也就是 bmp，十六进制以内 )
     2. GB：只有 ASCII 字符和中文
     3. ISO-8859：欧洲国家的编码
     4. BIG5：繁体

2. codePointAt 系列 API 才能正确解析 emoji 字符（两个字符）

3. Uincode 码点定了，码点怎么存？

   1. Unicode 只是一个符号集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储，方案就是 UTF：
   2. UTF-8:占两个字节：ASCII 为主采用 UTF-8 存储；UTF-8 里面，ASCII 所表示的字符集就是用 1 Byte 来表示，而大部分汉字则是用 3 Byte 来表示。
   3. UTF-16:占四个字节：bmp 以外，不兼容 ASCII 码，对于非欧洲语言，UTF-8 则需要更多的内存比 UTF-16。
      区别：

   **JS 是以 UTF-16 实际在内存存储的**

4. **chartCodeAt fromCharCode 系列 性能好于 codePointAt 系列**

写一个 UTF8_Encoding 函数 => 作业 2

5. 字符串语法：
   1. 双引号支持任何**非双引号和反斜杠字母**，反斜杠后面可以接转义，支持\x 两位，\u 四位（十六进制）
   2. 单引号支持：' " \ \n \t \r \f(form feed)
   3. 字符串语法：分两部分：\`开头，\${结尾，}开头`结尾
      产生四份顶级输入元素

> 为什么有 \r \n 两种？ 老式打字机换行需要把横梁 carriage return ，最早 ascii 字符集体系代表，linux 选择抛弃历史包袱

写一个正则匹配单双引号的字符串 => 作业 3

null 和 undefined 是两个不同类型，typeof 体系里的 搞成 object

#### 3. 正则表达式直接量：

/a/g

1. 处理：能插除号的就是除号，不能插除号的就是正则

## 字符编码相关 API:
BMP以内安全使用API：
1. `str.charAt(0)`：可以找到字符串中对应位置的BMP内码点；
2. `String.fromCharCode(0x0041)`：只传递一个参数情况下，BMP内码点可正常转换为字符；
3. `'你好'.charCodeAt(0)`：返回指定位置字符对应的unicode码点，对于BMP以内字符，可以正常获取；

BMP以外和以内安全使用API（codePoint系列）：
1. `String.fromCharCode(0xD83D, 0xDCA9)`：也可以传递两个参数，分别代表高低位码点，会被认为是UTF-16代理对直接可以转换为一个BMP以外字符；
2. `String.fromCodePoint(0x1F4A9)`：直接传递一个BMP以外的码点（UTF-16代理对），即可转换为对应字符；
3. `'🌶'.codePointAt(0)`：可以得到BMP以外字符的UTF-16代理对

# 网络资料：

## UTF-8和UTF-16的区别：
1. UTF-8和UTF-16都是可变长度编码。但是，在UTF-8中，一个字符可能至少占用8位，而在UTF-16中，字符长度以16位开始。

2. UTF-8主要优点：
基本ASCII字符（例如数字，不带重音的拉丁字符等）占据一个字节，与US-ASCII表示形式相同。这样，所有US-ASCII字符串都变成有效的UTF-8，在许多情况下，它都提供了良好的向后兼容性。
没有空字节，允许使用以空终止的字符串，这也引入了很多向后兼容性。
UTF-8与字节顺序无关，因此您不必担心Big Endian / Little Endian问题。

3. UTF-8主要缺点：
许多常见字符的长度不同，这会减慢按代码点编制索引的速度，并严重降低计算代码点计数的速度。
即使字节顺序无关紧要，但有时UTF-8仍具有BOM（字节顺序标记），用于通知文本以UTF-8编码，并且即使文本仅包含ASCII字符也破坏了与ASCII软件的兼容性。 。Microsoft软件（例如记事本）特别喜欢将BOM添加到UTF-8。

4. UTF-16主要优点：
BMP（基本多语言平面）字符，包括拉丁语，西里尔字母，大多数中文（中华人民共和国对BMP以外的某些代码点提供了强制性支持），大多数日语可用2个字节表示。这将加快索引和计算代码点计数情况下，文中未包含增补字符。
即使文本具有补充字符，它们仍将由成对的16位值表示，这意味着总长度仍可被2整除，并允许使用16位char作为字符串的原始成分。

5. UTF-16主要缺点：
US-ASCII字符串中有很多空字节，这意味着没有以空字符结尾的字符串和大量的内存浪费。
在许多常见情况下（尤其是在美国/欧盟/使用西里尔字母的国家/以色列/阿拉伯国家/伊朗等），将其用作固定长度编码“通常是有效的”，通常会在不起作用的情况下导致支持中断。这意味着程序员必须意识到代理对，并在重要的情况下正确处理它们！
它的长度是可变的，因此尽管计数点数或索引点数比UTF-8小，但成本很高。

通常，UTF-16通常更适合于内存中表示，因为BE / LE在那里无关紧要（仅使用本机顺序）并且索引更快（只是不要忘记正确处理代理对）。另一方面，UTF-8非常适合文本文件和网络协议，因为它不存在BE / LE问题，并且空位终止通常很方便，并且具有ASCII兼容性。

## 为什么bmp以外的分成两个字符：
您的问题是表情符号不在基本多语言平面中，因为它的代码大于U + FFFF。Java字符只有16位长，因此BMP中的字符仅使用一个Java字符。BMP之外的字符以UTF16编码。
Unicode表情符号😀是GRINNING FACE字符U + 1F600。其utf8编码为0xf0,0x9f,0x98,0x80，其UTF-16编码为（如Jon Skeet在其评论中所述）0xd83d, 0xde00。这意味着"😀"is 的内部Java表示形式"\ud83d\ude00"，如调试器可能显示的那样。

## 关于高低位：
高位编码字符是用两个低位编码（lower value）表示形成的一个字符；  
高位编码单元（higher code point）使用一对（低位编码 lower valued）代理伪字符（"surrogate" pseudo-characters）来表示，从而构成一个真正的字符。


# 参考文章：
http://www.alloyteam.com/2016/12/javascript-has-a-unicode-sinkhole/
转换工具：http://tools.jb51.net/transcoding/decode_encode_tool
编码转换工具：https://www.cnblogs.com/cthon/p/9297232.html