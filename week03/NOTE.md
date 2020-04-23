# 64位浮点数：
1. 也是双精度浮点数
2. 分为符号位、指数位、小数位
3. 0.5+0.5能算对
4. 如果对精度损失过大
5. 内存里比特位是反的
Unit8Array

Float64Array

infinite NaN

# Expression 表达式：
PDF201页 12.3
## 1. 运算符优先级：
1. 也叫树结构产生的语法：
### 1. 最高级运算符
1. Member（成员访问类）运算符：
    左边肯定是对象，右边可以是symbol或者string
    - a.b
    - a[b]
        只有member运算才会保持可写
    - foo`string`
        - foo必须是对象，是不是函数就是运行时的事了
        - stringTemplate是参数，会被按照${}拆分
    - super.b
        - 调用父类的方法和属性
    - super['b']
    - new.target
        - 用于判断是否被new调起来
        - JS库防御性feature
    - new foo()

> instanceof是走原型链检查的，由prototype 决定

2. new运算符：
    - new Foo；

3. Reference类型运算符：
    - Object
    - key
    有的运算符有写引用类型的的能力，才体现出引用的特性
    - delete
    - assign

4. 函数调用：
    只要有函数调用，优先级就会变低，配合成员访问，优先级会变低
    - foo()
    - super()
    - (foo()['b'])

> Left Handside & Right Handisde:
>   指的是等号左边和等号右边
>   JS中左值表达式极限就是call
    - 

6. 更新运算符：
    - a++；
        - a和++中间不能有换行，如果有换行，该语法就不成立了
    - a--；
    - --a；
    - ++a；
    > 自增以后就不是LeftHandside了，前+后会报LeftHandside错误

7. 单步运算符 Unary：
    - delete a.b
    - void foo();
        - void把后面所有东西都变成undefined；
        - 生成undefined最稳妥方式是void 0；
        - 使用IIFE的时候，需要在function前加void；
    - typeof a
        - typeof null  =>  'object'
        - typeof function(){}  =>  'function'
        - 可以区分函数
    - await a
    - +a
    - -a
    - !a

8. 唯一一个右结合运算符：
    - **

9. 乘除取模

10. 加减:
    - 加减会做类型转换

11. 大于小于小于等于大于等于in instanceof：
    - in后边必须是对象

12. 
    - 等号      … == …
    - 非等号	… != …
    - 全等号	… === …
    - 非全等号	… !== …
13. 
    - && 
        - foo1()&&foo2(): 先算左边，如果左边foo1结果是false，右边foo2不执行
14. 
    - ||
        - foo1()||foo2(): 如果左边foo1返回false，会执行右边foo2

15. 三目运算符：
    - 如果要求使用表达式的地方可以使用

16. 赋值：
    - +=
    - =
    - *=

17. yield

18. 展开运算符

19. 逗号


## 类型转换：
1. Number => String
2. Boolean => String


## 装箱：
- 成员访问会强行装箱；
- new + Number、String、Symbol、Boolean，或者直接Object('abc')，返回装箱后的对象
- 不带new + Number、String、Symbol、Boolean，返回原始值
- ! new String('')  // false
- ! ''  // true
- symbol原始值通过Object(symbol('123'))装箱


## 拆箱：
- 1 + {}  // 1[object Object]

- `1 + {[Symbol.toPrimitive](hint){return 6}, valueOf(){return 1}, toString(){return "2"}}`

- 如果有toPrimitive，只调toPrimitive，
- 如果没有toPrimitive，**先看valueOf，再看toString**
- toPrimitive 不可以
- .toPrimitive :
    - 有一个参数hint
- Date.prototype.toJSON：会优先转换成Number

# 练习：
1. stringToNumber

2. numberToString

