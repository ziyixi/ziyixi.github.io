---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 风语奇迹屋
  text: 我是谁，谁又是我
  # tagline: 知识是进步的阶梯，争取每天都有知识点更新
  tagline:
  image:
    src: /logo.jpeg
    alt: 风语奇迹屋
  actions:
    - text: 机器学习101
      link: /ml/pytorch
    - text: 常用导航
      link: /nav
      theme: alt
features:
  - icon: 📖
    title: 机器学习101
    details: 机器学习from bottom to top<small>（源代码实现）</small><br />我一定能造出更好的轮子～
    link: /ml/pytorch
    linkText: 机器学习101
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />读代码是最好的学习手段之一～
    link: /raw-code/pytorch
    linkText: 源码阅读
  - icon: 💡
    title: Workflow
    details: 记录遇到一些问题的SOP<small>（Standard Operation Procedure）</small><br />费脑的事情做一次就好了～
    link: /workflow/utils/library
    linkText: 常用工具库
  - icon: 🧰
    title: CSAPP
    details: 记录一些新学到的CSAPP知识<br />越学越菜lol
    link: /book/csapp
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />天灵灵，地灵灵，不踩坑不灵～
    link: /debug/cpp
    linkText: 踩坑记录
  - icon: 💯
    title: LeetCode
    details: 记录刷LeetCode的一些心得体会<br />既然不得不刷，那就刷的开心一点～ <small>虽然我只想躺平</small>
    link: /leetcode
    linkText: 刷题记录
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

</style>
