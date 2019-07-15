<template>
  <div class="cinema-list">
    <HeaderTitle></HeaderTitle>
    <div class="cinema-list-tag">
      <div class="cinema-list-tag-name">
        <label class>
          全城
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style="display: none;"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style
          />
        </label>
        <label class>
          APP订票
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style="display: none;"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style
          />
        </label>
        <label class>
          最近去过
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style="display: none;"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style
          />
        </label>
      </div>
    </div>
    <div class="cinema-list-wrap">
      <ul class="cinema-list">
        <CinemasItem
          v-for="cinemaItem in cinemaList"
          :key="cinemaItem.cinemaId"
          :cinemaItem="cinemaItem"
        ></CinemasItem>
      </ul>
    </div>
    <mt-popup v-model="popupVisible" position="top" popup-transition="popup-fade">点点点点点</mt-popup>
  </div>
</template>

<script>
import Vue from "vue";
import BScroll from "better-scroll";
import http from "../../utils/http";
import { Indicator } from "mint-ui";
import { Popup } from "mint-ui";
import cookie from "../../utils/cookie";
import HeaderTitle from "../../components/HeaderTitle";
import CinemasItem from "./CinemasItem";

Vue.component(Popup.name, Popup);
export default {
  data() {
    return {
      cinemaList: [],
      popupVisible: false,
    };
  },
  async mounted() {
    this.$nextTick(async () => {
      Indicator.open({
        text: "┭┮﹏┭┮努力加载中",
        spinnerType: "fading-circle"
      });
      // let cityID = cookie.getCookie("CITY_ID") ? cookie.getCookie("CITY_ID")[1] : '110110'

      let cityID = cookie.getCookie("CITY_ID")
      ? cookie.getCookie("CITY_ID")[1]
      : '360100'
      let params = {
        cityId: cityID,
        ticketFlag: 1,
        k: 1067120
      };
      let host = "mall.film-ticket.cinema.list";
      let result = await http.get({ params, host });
      this.cinemaList = result.data.cinemas;
      let el = ".cinema-list-wrap";
      Indicator.close();

      var bScroll = new BScroll(el, {
        pullUpLoad: true,
        click: true
      });
      bScroll.on("pullingUp", () => {});
    });
  },
  components: {
    HeaderTitle,
    CinemasItem
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.cinema-list {
  flex: 1;
  overflow: hidden;
  display flex
  flex-direction column
}
.cinema-list-tag {
  height: 0.5rem;
  width: 100%;
  text-align: center;
  background-color: #fff;
  z-index: 2000;
}

.cinema-list .cinema-list-tag .cinema-list-tag-name {
  position: relative;
}

.cinema-list .cinema-list-tag .cinema-list-tag-name label {
  float: left;
  width: 33.3%;
  line-height: 0.4rem;
  font-size: 0.14rem;
  color: #191a1b;
  letter-spacing: -0.2px;
}

.cinema-list .cinema-list-tag .cinema-list-tag-name img {
  vertical-align: middle;
  padding-left: 2px;
}

.cinema-list .cinema-list-tag:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.cinema-list .cinema-list-wrap {
  flex: 1;
  overflow: hidden;
  z-index: 100;
  height: 100%;
}

.cinema-list .cinema-list-wrap ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
