<template>
  <div class="billboards">
    <mt-swipe :prevent="true">
      <mt-swipe-item class="mint-swipe-item" v-for="banner in banners" :key="banner.id">
        <a class="item-wrap">
          <div
            class="lazy-img"
            alt="slider"
            style="height: calc(56vw); background: rgb(249, 249, 249);"
          >
            <div class="padding" style="height: calc(56vw); background: rgb(249, 249, 249);">
              <img :src="banner.imgUrl" width="64px" alt="img" />
            </div>
            <div
              class="lazy-img-wrap"
              style="height: calc(56vw); background: rgb(249, 249, 249); opacity: 1; display: block;"
            >
              <img :src="banner.imgUrl" class="target-img" />
            </div>
          </div>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import cookie from "../../utils/cookie";
import http from "../../utils/http";
import { Swipe, SwipeItem } from "mint-ui";


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      banners: []
    };
  },

  methods: {
    
  },

  async mounted() {
    let cityID = cookie.getCookie("CITY_ID")
      ? cookie.getCookie("CITY_ID")[1]
      : 110110;
    let result = await http.get({
      params: {
        type: 2,
        cityId: cityID,
        k: 4875446
      },
      host:"mall.cfg.common-banner"
    });
    this.banners = result.data
  }
};
</script>

<style lang="stylus" scoped>

.billboards {
  height: 56vw;
}

.mint-swipe {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.billboards .item-wrap {
  height: 100%;
  width: 100%;
  display: block;
}

.lazy-img .lazy-img-wrap .target-img {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
