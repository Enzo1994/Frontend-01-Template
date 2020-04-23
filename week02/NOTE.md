# 第二周

语言按语法分类
1、非形式语言：中文英文
2、形式语言（乔姆斯基谱系）：
0 型 无限制文法 ：
1 型 上下文相关文法 ：开头、结尾 需要考虑当前上下文决定意义，比如<
2 型 上下文无关文法 ： BNF 大部分是二型
3 型 正则文法 ： 会限制表达能力，只允许左递归

词法： 正则处理 变成词 再把词输入流做词法分析
语法： BNF 范式

> 读语言产生式

如何定义一个语言？
巴克斯诺尔范式 产生式（BNF）
用尖括号括起来的名称来表示
语法结构分成基础
引号和中间的字符表示为**终结符**
可以有括号 \*表示重复多次
|表示或 +表示至少 1 次

> 运算符优先级会用到
> 语法分析会用到

<Program>:= ("a"+ | "b"+)+
<Program>:= <Program> "a"+ | <Program> "b"+

BNF 加法：
<Number> = "0"| "1" | "2" | ... | "9"
十进制整数：
<DecimalNumber> = "0 | (("1" | "2" | ... | "9") <Number>\*)

<Expression> = <DecimalNumber> "+" <DecimalNumber>
加法表达式：
<AdditiveExpression> = <DecimalNumber> | <Expression> "+" <decimalNumber>

乘法表达式：
<MultiplicativeExpression> = <DecimalNumber> | <MultiplicativeExpression> "\*" <DecimalNumber>

<LogicExpression> = <AddtiveExpression> | <LogicalExpression> "||" <AdditiveExpression> |
<LogicalExpression> "&&" <AdditiveExpression>

<PrimaryExpression> = <DecimalNumber> | "(" <LogicalExpression> ")"

四则运算：
1+2*3
终结符（具体字符）：
Number
+-*/
非终结符：
MultiplicationExpression
AddtiveExpression

形式化语言都能用 BNF 描述

> JavaScript 是 ANTLR

任务 1：通过正则来验证表达式
<DecimalNumber> = /0|[1-9][0-9]\*/

现代语言的特例：

1. C++，\*也可是指针，取决于星号前的标识符是否被生命为类型
   PrePrecess 预处理 class

# 图灵完备性：

凡是可计算的的机器都叫图灵机

1. 命令式——图灵机 等同于 if 和 while
   1. goto （ C 可以用 goto 实现跳转 ）
   2. if 和 while （ 有分支和循环就是图灵完备 ）
2. 声明式——lambda 具有图灵等效性
   递归

> 生成代码叫元编程

# 动态与静态：

1. 动态：
   1. 在用户的设备/在线服务器上
   2. 产品实际运行时
   3. Runtime
2. 静态：
   1. 在程序员的设备上
   2. 产品开发时
   3. Compiletime

# 类型系统：

1. 动态类型系统与静态类型系统
2. 强类型与弱类型（有隐式转换的都是弱类型）
3. 复合类型
   1. 结构体 对象
   2. 函数签名
4. 子类型
   逆变
   凡是能用 Function<Child>的地方，都能用 Array<Parent>
   协变：
   凡是能用 Array<Parent>的地方，都能用 Array<Child>

图灵完备 - 类型系统

# 一般命令式编程语言组成：

1. Atom：Identifier、Literal
2. Expression： Atom、Operator、Punctuator
3. Statement： Expression、keyword、punctuator
4. Structure： Function、Class、Process、Namespace。。。
5. Program： Program、Module、Package、Library

# 重学 JavaScript：

语法 => 语义 => 运行时
