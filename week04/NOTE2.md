# Realm:
梦境、国度

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