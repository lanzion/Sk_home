<template>
  <div class="classified_nav">
    <ul>
      <li>
        <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/325" @click="StatisticsBUOY('Recommend|nuan')"><img src="../../assets/doubleel_img/ClassifiedNav1.png" alt=""></a>
      </li>
      <li>
        <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/327" @click="StatisticsBUOY('Recommend|yangsheng')"><img src="../../assets/doubleel_img/ClassifiedNav2.png" alt=""></a>
      </li>
      <li>
        <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/321" @click="StatisticsBUOY('Recommend|haoshui')"><img src="../../assets/doubleel_img/ClassifiedNav3.png" alt=""></a>
      </li>
      <li>
        <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/326" @click="StatisticsBUOY('Recommend|baoma')"><img src="../../assets/doubleel_img/ClassifiedNav4.png" alt=""></a>
      </li>
      <li>
        <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/320" @click="StatisticsBUOY('Recommend|gehu')"><img src="../../assets/doubleel_img/ClassifiedNav5.png" alt=""></a>
      </li>
      <li>
        <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/323" @click="StatisticsBUOY('Recommend|xinxian')"><img src="../../assets/doubleel_img/ClassifiedNav6.png" alt=""></a>
      </li>
      <li>
        <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/322" @click="StatisticsBUOY('Recommend|jiaju')"><img src="../../assets/doubleel_img/ClassifiedNav7.png" alt=""></a>
      </li>
      <li>
        <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/324" @click="StatisticsBUOY('Recommend|qiche')"><img src="../../assets/doubleel_img/ClassifiedNav8.png" alt=""></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    StatisticsBUOY(item) {
      this.$statistics = this.$statistics.of("HOME_BTN|");
      this.$statistics.click(item);
    }
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.classified_nav {
  margin: 10 / @rem 0;
  ul {
    overflow: hidden;
    li {
      width: 23.6%;
      float: left;
      margin: 5 / @rem;
      margin-bottom: 10 / @rem;
      a {
        display: block;
        height: 100%;
      }
    }
  }
}
</style>