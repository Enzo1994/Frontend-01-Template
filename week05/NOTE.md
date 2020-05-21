# 浏览器工作原理：

## 综述：
1. 拿到URL，经过HTTP请求，
2. 解析HTML代码，产生DOM树
3. 进行CSS computing，生成带CSS的DOM树
4. 进行layout，排版，确定DOM位置，生成带位置的DOM树
5. 带位置的DOM树进行渲染，得到bitmap位图，
6. 把bitmap显示在屏幕上

## ISO-OSI七层网络模型：
1. HTTP：<font color="yellow">require("http")</font>
    1. 应用
    2. 表示
    3. 会话
2. TCP：<font color="yellow">require("net")</font>
    1. 传输
3. Internet（ IP ）：
    1. 网络层
4. 4G / 5G / WIFI:
    1. 数据链路层
    2. 物理层

## TCP 与 IP 的基础知识：
1. 流、端口、require("net")
2. 包、IP地址、libnet/libpcap

## 浏览器做了什么？


## 一、URL：
