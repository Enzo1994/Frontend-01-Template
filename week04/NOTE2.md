# Realm:
梦境、国度
1. 在JS中，函数表达式和对象直接量均会创建对象
2. 使用. 做隐式转换也会创建直接量
3. 这些对象是有原型的，如果我们没有realm，就不知道他们的原型是什么

## 每个realm有一整套完整的JS内置对象
1. 内置对象：
![./内置对象.png]


## 函数上下文栈（execution ：
1. 进入一个函数，会push一个环境进入调用栈
2. 函数返回，发生一次pop

### 函数执行上下文栈都有什么：
1. 代码执行位置（async函数、generate函数需要存）
2. 如果里面有function，如果没有函数，这里就是null
3. script or module：如果是由script或者module初始化的这里就会有
4. generator：如果由generator产生的属性才会有，否则是null
5. realm：一定要知道自己所在的realm
6. lexical environment包含：
    1. this
    2. new.target
    3. super
    4. 变量 
7. variable environment：
    - 历史包袱，主要处理var

### Environment Record：
1. Declarative Environment Records
    1. Function Environment Records
    2. module Environment Records
2. Global Environment Records
3. Object Environment Records


