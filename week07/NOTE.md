# CSS

css语言可以分为@rule和普通rule

## @规则：
1. @font-face
2. @keyframes
3. @media：可嵌套
4. @import
5. @supports：检查grid比较好

> 用vw比rem效果好，rem换成vw

## 普通规则：
1. selector：
    - :not(.cls)
    - ::first-letter

```css
--foo:if(x>5) this.width = 3;
:root{
    --header-color:#
}
h1{
    background-color:var(--header-color)
}
```

inline相当于正常流的主轴  
block相当于正常流的交叉轴


## iconfont原理：

## GPU栅格化：GPU像素化
渲染的最后一个阶段做

只有重排才会启用gpu渲染

image加载完必重排

## requestAnimationFrame：
一秒渲染六十帧满分

普通动画24帧就够了 48帧就是比较好的品质了

## transform比position好

和top和left相关的都是和位置相关的，会发生重排 

transform是显卡里面的  -- 补

图形学里面各种transform 是矩阵运算，在绘制前那一刻画上去就好 21：47

canvas动画就不会重排

## 移动端兼容问题学习：
适配屏幕有系统方法

其他的很随机出现

指定合理测试流程、测试工具、系统性发现兼容性问题

AR（两个3D视口，3D引擎来做，底层依赖的webGL） => 3D框架 => webGL
主要了解3D引擎比如巴比龙

可视化搭建 22：08 技术产品导向，有需求，幻视



