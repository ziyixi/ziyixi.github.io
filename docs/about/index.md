---
description: 我是谁，谁又是我
layoutClass: m-mao-layout
aside: false
---

<style>
.m-zayne-layout img {
  display: inline-block;
  margin-right: 6px;
}
.gm-style-iw button {
    display:none !important;
}
</style>

<script setup>
import { GoogleMap, InfoWindow } from 'vue3-google-map'

const center = { lat: 37.3982205, lng: -121.9859702 }
const home = { lat: 37.3805556, lng: -121.9760268 }
const company = { lat: 37.4109031, lng: -122.0283291 }
</script>

```sh:no-line-numbers
我是谁，谁又是我。
                                -- Maybe myself?
```

我常常有一种错觉，那就是我并不是我，而是某种社会期望的集中体。国家期望我为栋梁之才，朋友则期望我坦诚相待，父母则期望我成为某种”好孩子“。在公司里，老板期望我Motivated，同事们则期望我easy to cooperate。可当我满足了所有这些期望，固然社会意义上，以及在生物属性上，我还是我自己，但在统计意义上，我大概就是某种多维度人格分布的平均。就这么过去自己的一生，太差劲了，太无趣了，于是我想，做点啥吧，就留下来这个记录所思所想的小乐园。

**我？**

+ 现居湾区码农一枚
+ 人生约有十年学习某冷门专业（seismology）。自认为对此尚有热情（特指其中的math+physics+cs），可惜对geology颇无兴趣，遂入行CS。
+ 自以为代码写得还可以，有一个CS的本科学位，以及一个CS大类的PhD学位。
+ 梦想去南极待几个月，除却Internet和企鹅，闲人勿扰
+ P社玩家，V3/EU4/CK3/Stellaris/HOI，所以熟知欧洲中世纪至近代历史和家族史（🐶）
+ 喜欢下雨下雪，对湾区阳光明媚的天气深恶痛绝，向往🦐图（🐶+1）
+ INFJ，据说很稀少的人格

<GoogleMap
  api-key="AIzaSyAHPnE35KiSLVxi8X1IgocG_EyRLb2U7tE"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="12"
  >
    <InfoWindow :options="{ position: home, content: 'My Home!' }" />
    <InfoWindow :options="{ position: company, content: 'I am working here!' }" />
</GoogleMap>