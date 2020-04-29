# Statement语句：
## Completion Record：一条记录，语句完成之后状态的描述，只有三个字段
1. type：语句完成类型
    1. normal：语句正常执行完成
    2. break：
    3. continue：
    4. return：
    5. throw：非normal
2. value：types
3. target：label


## 简单语句：
1. 表达式语句：ExpressionStatement
2. 空语句：EmptyStatement
3. DebuggerStatement
4. ThrowStatement
5. ContinueStatement：
    1. 可以带label标签名
6. BreakStatement
    2. 可以带label标签名
7. ReturnStatement

## 复合语句：
1. BlockStatement：
    1. 正常情况执行结果：normal
    2. 对象不能以大括号开头，以大括号开头的一定是blockStatement
    3. 把多条语句括起来变成一条语句
    4. 为const和let提供作用域
    5. 一旦里面有非normal就不会继续执行（比如throw后面不会执行）
    6. 执行到`Completion Record`为非`normal`的时候结束
2. IfStatement
3. Iteration：
    1. while()
        1. 如果while有return和throw，
        2. 如果里面是continue或者break，while就会把它消费掉，break后面不执行，如果是continue就继续执行结果
        3. 循环会执行多次
        4. 如果循环带label
    2. do xxx while()
        1. 比while多执行一次
        2. continue终止当前block，break后面不继续执行当前while表达式
    3. for( 声明 ; xxx ; xxx);
        1. for本身会产生作用域，范围在block之外
    4. for( 声明 in xxx)
    5. for( 声明 of xxx)
    6. for await ( of )

## try:
1. throw是唯一一个可以从函数里面蔓延到函数外面的函数
### for:
for 外层`(let i = 0 ; i<10 ; i++)`可以理解为父作用域
```js
{
    let i=0;
    {
        // for内部语句
    }
    console.log(for)
}
```

```js
function *g(){
    yield 0;
    yield 1;
    yield 4
}
for(let p of g()){
    console.log(p)
}
```



## 定时器：

## var：
1. 一定写在函数作用域内，不能在子作用域内使用var
2. 写在return后面也可以起到声明的作用；

## Generator：
1. 可以遍历Generator函数执行结果
```js
<script>
  function* g() {
    yield 0;
    yield 1;
    yield 4;
  }
  for (let item of g()) {
    console.log("item", item);
  }
</script>
```

## 对象

### 享元模式、flyweight

1. 在设计对象的状态和行为时，我们总是遵循”行为改变状态“的原则

js运行时没有方法的概念，都是属性

key：symbol 、string
property：data、accessor（访问器）

# JS中的一般对象：
## 第一种：Data Property:
数据属性用于描述状态
1. value
2. writable
3. enumerable
4. configurable

## 第二种：Accessor Property:
访问器属性用于描述行为，多用于基础库，vue2.0
1. get
2. set
3. enumerable
4. configurable

> PS:数据属性中如果存储函数，也可以用于描述行为

## 属性的查找：
> 有原型链的说法导致，对象只需要描述和原型的区别即可

## Object API:
1. Object.defineProperty();
2. 指定原型并新建对象或者改变对象原型：Object.create() / Object.setPrototypeOf() / Object.getPrototypeOf()
3. new / class / extends
4. new / function / prototype

# JS中的函数对象：
1. 除了一般对象的原型和属性，函数对象还有一个行为叫call，能call的都是function
2. 带constructor属性就是构造器

3. 凡是用于new的全用class

作业：找js标准里所有特殊对象：9.4
1. bound function：
`function.bind`

# 转UTF-8代码：
```js

"美".codePointAt(0).toString(2)
// 补位
[0b11100111, 0b1011110, 0b1001110].map(e=>e.toString(16))
// ["e7","be","8e"]

```

# StringLiteral：
?: