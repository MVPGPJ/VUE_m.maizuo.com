<template>
  <div class="scroll">
    <!-- 头部 -->
    <div class="film-header show-film-header">
      <div v-if="!showPhotos" @click="handleBack" class="goBack">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <div v-else @click="handlePhotoHidden" class="goBack">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <div v-if="!showPhotos" class="title">{{message.name}}</div>
      <div v-else class="title">剧照({{photos}})</div>
      <!---->
    </div>
    <div class="main">
      <div class="film">
        <!-- 展示图 -->
        <div
          class="lazy-img film-poster"
          alt="filmPoster"
          style="width: 100%; background: rgb(249, 249, 249);"
        >
          <div class="padding" style="width: 100%; background: rgb(249, 249, 249);">
            <img
              src="data:image/png;base64,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"
              width="64px"
              alt="img"
            />
          </div>
          <div
            class="lazy-img-wrap"
            style="width: 100%; background: rgb(249, 249, 249); opacity: 1; display: block;"
          >
            <img :src="message.poster" class="target-img" />
          </div>
        </div>

        <!-- 电影信息 -->
        <div class="film-detail">
          <div class="col">
            <div class="film-name">
              <span class="name">{{message.name}}</span>
              <span class="item">{{type}}</span>
            </div>
            <div class="film-grade">
              <span class="grade">{{message.grade}}</span>
              <span class="grade-text">分</span>
            </div>
          </div>
          <div class="film-category grey-text">{{message.category}}</div>
          <div class="film-premiere-time grey-text">{{premiereAt}}上映</div>
          <div class="film-nation-runtime grey-text">{{message.nation}} | {{message.runtime}}分钟</div>

          <div class="test grey-text">{{message.synopsis}}</div>
          <div
            class="film-synopsis grey-text"
            :class="{'hidde':isTrue}"
            :style="'height:'+Height+'px;'"
          >{{message.synopsis}}</div>
          <div class="toggle" @click="textShow">
            <img
              :class="{'upper':!isTrue}"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>

        <!-- 演员信息 -->
        <div class="actors">
          <div class="actors-title-bar">
            <span class="actors-title-text">演职人员</span>
          </div>
          <div class="scroll-actors">
            <div
              class="row-scroll-wrapper actors-list"
              style="height: 140px; background: rgb(255, 255, 255);"
            >
              <ul class="row-scroll-items-nav">
                <li
                  v-for="actor in message.actors"
                  :key="actor.name"
                  class="row-scroll-item"
                  style="width: 85px; min-width: 85px;"
                >
                  <div class="actors-item" style="text-align: center;">
                    <div
                      class="lazy-img actors-img"
                      style="width: 85px; height: 85px; background: rgb(249, 249, 249);"
                    >
                      <div
                        class="padding"
                        style="width: 85px; height: 85px; background: rgb(249, 249, 249);"
                      >
                        <img
                          src="data:image/png;base64,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"
                          width="64px"
                          alt="img"
                        />
                      </div>
                      <div
                        class="lazy-img-wrap"
                        style="width: 85px; height: 85px; background: rgb(249, 249, 249); opacity: 1; display: block;"
                      >
                        <img :src="actor.avatarAddress" class="target-img" />
                      </div>
                    </div>
                    <span class="actors-name">{{actor.name}}</span>
                    <span class="actors-role">{{actor.role}}</span>
                  </div>
                </li>

                <li class="padding-right-li"></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 剧照 -->
        <div class="photos">
          <div class="photos-title-bar">
            <span class="photos-title-text">剧照</span>
            <span @click="handlePhotoShow" class="photos-to-all">全部({{photos}}) ></span>
          </div>
          <div class="scroll-photos">
            <div
              class="row-scroll-wrapper photos-list"
              style="height: 115px; background: rgb(255, 255, 255);"
            >
              <ul class="row-scroll-items-nav">
                <li
                  v-for="(photo,index) in message.photos"
                  :key="photo"
                  class="row-scroll-item photos-item-wrap"
                  style="width: 150px; min-width: 150px;"
                >
                  <div class="photos-item" @click="showSwipe(index)">
                    <div
                      class="lazy-img photos-img"
                      style="width: 150px; height: 100px; background: rgb(249, 249, 249);"
                    >
                      <div
                        class="lazy-img-wrap"
                        style="width: 150px; height: 100px; background: rgb(249, 249, 249); opacity: 1; display: block;"
                      >
                        <img :src="photo" class="target-img" />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="padding-right-li"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showPhotos" class="album-zone">
      <div class="all-photos">
        <div
          v-for="(photo,index) in message.photos"
          :key="photo"
          @click="showSwipe(index)"
          class="photo-context"
        >
          <div
            class="lazy-img album-photo"
            style="width: 100%; height: 100%; background: rgb(249, 249, 249);"
          >
            <div
              class="lazy-img-wrap"
              style="width: 100%; height: 100%; background: rgb(249, 249, 249); opacity: 1; display: block;"
            >
              <img :src="photo" class="target-img" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="big-photo-zone" v-if="showPhoto">
      <div class="big-photo">
        <div class="header">
          <div>
            <i
              @click="hiddenSwipe"
              class="goBack iconfont icon-tubiaoguifan2"
              style="font-size: 22px;"
            >X</i>
          </div>
          <div class="title">{{page+1}}/{{photos}}</div>
        </div>
        <mt-swipe
          @change="handleChange"
          :defaultIndex="page"
          :show-indicators="false"
          :auto="0"
          :continuous="false"
        >
          <mt-swipe-item v-for="photo in message.photos" :key="photo">
            <img :src="photo" width="100%" class="photo" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>

    <a href="javascript:void" class style="height: 49px; bottom: 0px; width: 100%;">
      <div class="goSchedule">选座购票</div>
    </a>
  </div>
</template>

<script>
import Vue from "vue";
import http from "../../utils/http";
import BScroll from "better-scroll";
import moment from "moment";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      isTrue: true,
      message: {},
      type: "",
      premiereAt: "",
      showPhotos: false,
      showPhoto: false,
      page: 0,
      // 图片数量
      photos: "",
      Height:0,
    };
  },
  methods: {
    textShow() {
      this.isTrue = this.isTrue === false ? true : false;
    },
    handlePhotoHidden() {
      this.showPhotos = false;
    },
    handlePhotoShow() {
      this.showPhotos = true;
    },
    hiddenSwipe() {
      this.showPhoto = false;
    },
    showSwipe(index) {
      this.showPhoto = true;
      this.page = index;
    },
    handleChange(index) {
      this.page = index;
    },
    handleBack() {
      this.$router.go(-1);
    }
  },
  async mounted() {
    var bScroll = new BScroll(".main", {
      pullUpLoad: true,
      scrollY: true,
      scrollX: true,
      click: true
    });
    var bScroll2 = new BScroll(".scroll-actors", {
      scrollX: true
    });
    var bScroll3 = new BScroll(".scroll-photos", {
      scrollX: true,
      click: true
    });

    let host = "mall.film-ticket.film.info";
    let params = {
      filmId: this.$route.params.id
    };
    let result = await http.get({ params, host });
    this.message = result.data.film;
    this.type = this.message.item.name;
    this.photos = this.message.photos.length;
    moment.locale("zh-cn");
    this.premiereAt = moment(this.message.premiereAt * 1000).format("L");

    this.$nextTick(() => {
      let H = document.querySelector(".test").offsetHeight;
      this.Height = H
    });
  }
};
</script>

<style lang="stylus" scoped>
.big-photo .header .title {
  font-size: 0.19rem;
  line-height: 0.45rem;
  width: 100vw;
  text-align: center;
}

.big-photo {
  width: 100%;
  height: 100%;
  z-index: 3001;
  position: fixed;
  background-color: #000;
  top: 0;
}

.big-photo .header {
  position: fixed;
  width: 100vw;
  height: 0.44rem;
  color: #fff;
  z-index: 5;
}

.big-photo >>> .mint-swipe {
  overflow: hidden;
  position: relative;
  height: 100%;
  z-index: 3;
}

>>>.big-photo .mint-swipe .photo {
  display: block;
  width: 100%;
}

>>>.big-photo .mint-swipe .mint-swipe-item {
  display: inline-flex !important;
  align-items: center;
}

.big-photo .header .goBack {
  text-align: center;
  width: 0.3rem;
  position: absolute;
  top: 0.05rem;
  left: 0.12rem;
  color: #fff;
}

.album-zone .photo-context:nth-child(3n) {
  margin-right: 0;
}

.album-zone {
  position: fixed;
  top: 0.44rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: #fff;
}

.album-zone .all-photos {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
}

.album-zone .photo-context {
  width: calc(((100vw - 3px) / 3));
  height: calc(((100vw - 3px) / 3));
  margin-bottom: 1.5px;
  background-size: 80px;
  background-position: 50%;
  background-repeat: no-repeat;
  margin-right: 1.5px;
}

.album-zone .album-photo img {
  width: 100%;
  height: 100%;
}

.scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main, body {
  height: 100%;
  flex: 1;
  overflow: hidden;
}

.scroll .show-film-header {
  transition: all 0.3s ease !important;
  background-color: #fff !important;
  color: #191a1b !important;
}

.film .film-detail .upper {
  transform: rotate(180deg);
}

.scroll .film-header {
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  transition: all 0.3s ease;
  width: 100vw;
  height: 0.44rem;
  z-index: 1;
}

.scroll .film-header .goBack img {
  width: 30px;
}

.scroll .film-header .goBack {
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
}

.scroll .film-header .title {
  font-size: 0.19rem;
  line-height: 0.44rem;
  width: 100vw;
  text-align: center;
}

.lazy-img .lazy-img-wrap {
  width: 100%;
  background: #fff;
  position: absolute;
  overflow: hidden;
  top: 0;
  opacity: 0;
}

.film .film-detail {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
}

.film .film-detail .col {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.film .test {
  width: calc(100vw - 30px);
  opacity: 0;
  position: absolute;
  top: 1px;
  margin-left: -10000px;
}

.film .film-detail .hidde {
  height: 38px !important;
  overflow: hidden;
}

.film .film-detail .film-name {
  width: 256px;
}

.film .film-detail .film-name .name {
  color: #191a1b;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin-right: 7px;
}

.film .film-detail .film-grade {
  width: calc(100% - 250px);
  text-align: right;
  color: #ffb232;
}

.film .film-detail .film-grade .grade {
  font-size: 18px;
  font-style: italic;
}

.film .film-detail .film-grade .grade-text {
  font-size: 10px;
}

.film .film-detail .film-name .item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
}

.film .film-detail .film-synopsis, .film .film-detail .hidde {
  transition: height 0.5s ease;
}

.film .film-detail .film-synopsis {
  margin-top: 12px;
}

.film .film-detail .grey-text {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}

.film .film-detail .toggle {
  text-align: center;
  display: block;
  height: auto;
  width: 20px;
  margin: auto;
  line-height: normal;
}

.film .film-detail .toggle img {
  width: 8px;
  margin: auto;
}

.film .actors {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
}

.film .actors .actors-title-bar {
  width: 100%;
  padding: 15px;
}

.film .actors .actors-title-bar .actors-title-text {
  font-size: 16px;
  text-align: left;
  color: #191a1b;
}

.film .actors .actors-title-bar span {
  display: inline-block;
  height: 22.5px;
  line-height: 22px;
}

.row-scroll-wrapper ul {
  margin: 0;
  padding-left: 15px;
  list-style: none;
}

.row-scroll-wrapper .row-scroll-items-nav .row-scroll-item {
  position: relative;
  margin-right: 10px;
}

.row-scroll-item {
  cursor: pointer;
  display: block;
  float: left;
  width: 105px;
}

.film .film-detail .film-synopsis {
  margin-top: 12px;
}

.lazy-img {
  position: relative;
}

.film .actors .actors-item span {
  display: block;
  text-align: center;
}

.film .actors .actors-name {
  padding-top: 10px;
  font-size: 12px;
  color: #191a1b;
  width: 85px;
  height: 18px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.film .actors .actors-role {
  font-size: 10px;
  color: #797d82;
}

.lazy-img .lazy-img-wrap img {
  left: 0;
}

.actors-role, .actors-name {
  box-sizing: content-box;
}

.row-scroll-wrapper .row-scroll-items-nav .padding-right-li {
  width: 5px;
  cursor: pointer;
  clear: both;
}

.row-scroll-wrapper .row-scroll-items-nav .padding-right-li:after {
  content: '.';
  visibility: hidden;
}

.scroll-photos {
  width: 100;
  overflow: hidden;
}

.film .photos {
  margin-top: 10px;
  margin-bottom: 60px;
  background-color: #fff;
  box-sizing: content-box;
  width: 100%;
}

.film .photos .photos-title-bar {
  height: 62px;
  width: 100%;
  padding: 15px;
}

.film .photos .photos-title-bar .photos-title-text {
  font-size: 16px;
  text-align: left;
  color: #191a1b;
}

.film .photos .photos-title-bar .photos-to-all {
  font-size: 13px;
  color: #797d82;
  float: right;
}

.film .photos .photos-title-bar span {
  display: inline-block;
  height: 22.5px;
  line-height: 22px;
}

.scroll-actors {
}

.row-scroll-wrapper {
  -webkit-overflow-scrolling: touch;
  height: 236px;
  display: inline-block;
  overflow: hidden;
}

.row-scroll-wrapper .row-scroll-items-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  // width: 100%;
}

.row-scroll-wrapper ul {
  margin: 0;
  padding-left: 15px;
  list-style: none;
}

.row-scroll-wrapper .row-scroll-items-nav .row-scroll-item {
  position: relative;
  margin-right: 10px;
}

.film .photos .photos-item-wrap {
  width: auto !important;
}

.row-scroll-item {
  cursor: pointer;
  display: block;
  float: left;
  width: 105px;
}

.lazy-img .lazy-img-wrap, .lazy-img .padding {
  height: 56vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lazy-img .lazy-img-wrap .target-img {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.scroll .goSchedule {
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
}
</style>
