<template>
  <div class="bscroll" :id="id">
    <div class="movies" style="top:{{}}px;">
      <div class="city-fixed" @click="handleCity">
        <span>{{city}}</span>
        <i class="iconfont icon-sousuo-paixujiantouxia" style="font-size: 10px;"></i>
      </div>
      <Swipe></Swipe>
      <!-- <HeaderTitle></HeaderTitle> -->

      <tabs-bar-wrapper></tabs-bar-wrapper>

      <transition :name="transitionName">
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import Swipe from "./Swipe";
import cookie from "../../utils/cookie";
import HeaderTitle from "../../components/HeaderTitle";
import NowPlaying from "./NowPlaying";
import TabsBarWrapper from "./TabsBarWrapper";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      transitionName: "",
      id: "",
      city: ""
    };
  },
  components: {
    HeaderTitle,
    Swipe,
    NowPlaying,
    TabsBarWrapper
  },
  methods: {
    handleCity() {
      this.$router.push("/city");
    }
  },
  mounted() {
    let name = cookie.getCookie("CITY_NAME");
    if(name){
      this.city = name[1];
    }else{
      this.city = '南昌'
    }
    
  },
  watch: {
    $route(to, from) {
      if (to.name == "comingSoon") {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.slide-left-enter-active, .slide-right-enter-active, .slide-left-leave-active, .slide-right-leave-active {
  transition: all 0.3s;
}

.slide-left-enter, .slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-to, .slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}

.bscroll {
  position: relative;
  height: 100%;
  flex: 1;
  padding-bottom: 0.5rem;
  overflow: hidden;
}

.movies {
  position: relative;
  flex: 1;
  margin-bottom: 0.44rem;
}

.city-fixed {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}

.mint-swipe-items-wrap {
  overflow: hidden;
  position: relative;
  height: 100%;
}
</style>
