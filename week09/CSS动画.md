# Animation

> keyframes：定义一个keyframes，keyframes就相当于变量


> 帧率：
> 1. 一秒60帧以上就人眼看不出区别
> 2. 48帧运动观测比较平滑

## animation 属性：
1. animation-name 时间曲线
2. animation-duration 动画时长
3. animation-timing-function 关键帧之间的差值算法
4. animation-delay 动画开始前延迟
5. animation-itration-count 动画播放次数
6. animation-direction 动画的方向

## animation 写法：
```css
@keyframes 动画名{
    帧位置{ CSS属性 }
}
```

# transition:
## transition 属性：
1. transition-property 要变换的属性：
2. transition-duration 变换的时长：
3. transition-timing-function 时间曲线：
4. transition-delay 延迟：


# timing-function：
贝塞尔曲线：
起始点、终止点、两个控制点                                                                                              
三次贝塞尔曲线用的多

调成负的可以实现回弹的感觉


1. ease-in：出去的效果
2. ease-out：进入的效果

# 颜色：
HSV（色盘）
hsl(颜色(h)，纯度，明度)

# 形状：
1. border
2. box-shadow
3. border-radius
4. data uri 配合 svg 
