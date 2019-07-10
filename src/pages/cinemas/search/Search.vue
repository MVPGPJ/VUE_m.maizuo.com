<template>
  <div class="main">
    <div class="cinemas-search" data-enter-time="1562326315">
      <div class="cinemas-search-input">
        <div class="input-wrap onFocus">
          <i class="search-icon iconfont icon-sousuo-sousuofangdajing" style="font-size: 20px;"></i>
          <form>
            <input
              v-model.trim="message"
              type="text"
              placeholder="输入影城名称"
              class="search-input"
              v-on:keyup.enter="local"
              @keyup="changeMessage(message)"
            />
            <input style="display:none" />
          </form>
          <div class="clean-icon">
            <i class="iconfont icon-chongzhi-qingchu" style="font-size: 20px; display: none;"></i>
          </div>
        </div>
        <div class="cancel-btn" @click="cancel">取消</div>
      </div>

      <div class="cinema-init-area" style>
        <div class="cinema-nearby init-list">
          <div class="cinema-index-title">离你最近</div>
          <ul class="cinema-index-detail">
            <cinemaItemDetail
              v-for="recentlyItem in recently"
              :key="recentlyItem.cinemaId"
              :recentlyItem="recentlyItem"
            ></cinemaItemDetail>
          </ul>
        </div>
        <div class="historyScroll">
          <div v-if="history">
            <div class="search-history">
              <div class="cinema-index-title">最近搜索</div>
              <div v-for="(historyItem,name) in history" :key="name">
                <a class="mint-cell mint-cell-swipe">
                  <div class="mint-cell-left" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="mint-cell-swipe-buttongroup"></div>
                  </div>
                  <div class="mint-cell-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="mint-cell-title">
                      <span>
                        <i
                          class="history-icon iconfont icon-time_btn_play"
                          style="font-size: 0.15rem;"
                        ></i>
                      </span>
                      <span class="mint-cell-text">{{historyItem}}</span>
                    </div>
                    <div class="mint-cell-value"></div>
                  </div>
                  <div class="mint-cell-right" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="mint-cell-swipe-buttongroup" @click="clearOne(historyItem)">
                      <a
                        class="mint-cell-swipe-button"
                        style="background: rgb(192, 49, 49); color: rgb(255, 255, 255);"
                      >删除</a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="clean-history" @click="clearAll">清空搜索记录</div>
          </div>
        </div>
      </div>

      <div v-if="!(message == '')" class="cinema-search-result" style="display: block;">
        <div class="cinema-search-result-list" v-if="!(exp.length ==0)">
          <ul>
            <li v-for="expItem in exp" :key="expItem.cinemaId" class="cinema-search-result-item">
              <a :href="'#/cinema/'+expItem.cinemaId+'/film'" class="cinema-item-wrap">
                <div class="cinema-info-lf cinema-info">
                  <span class="cinema-name">{{expItem.name}}</span>
                  <span class="cinema-address">{{expItem.address}}</span>
                </div>
                <div class="cinema-info-rt cinema-info">
                  <div class>
                    <span class="cinema-lowPrice price-fmt">
                      <i>￥</i>
                      <span class="interge" style="font-size: 0.15rem;">{{expItem.lowPrice/100}}</span>
                      <span style="display: none;">.</span>
                      <span class="decimal" style="font-size: 0.1rem;"></span>
                      <span style="display: none;">.</span>
                      <span class="decimal" style="font-size: 0.1rem; display: none;">00</span>
                    </span>
                    <span class="upon">起</span>
                  </div>
                  <span class="cinema-gpsAddress">距离未知</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="empty-result" v-else>
          <img
            src="data:image/png;base64,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"
            alt
          />
          <p>没有找到匹配的影院</p>
          <p class="empty-list-tip">提示：仅支持搜索“影院”，建议您检查输入的影院名称是否有误？</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../../utils/http";
import { Indicator } from "mint-ui";
import cookie from "../../../utils/cookie";
import cinemaItemDetail from "../search/cinema-item-detail";
export default {
  data() {
    return {
      recently: [],
      
      message: "",
      history: [],
      cityList: {},
      exp: []
    };
  },
  computed: {},
  components: {
    cinemaItemDetail
  },
  async mounted() {
    Indicator.open();
    let cityID = cookie.getCookie("CITY_ID") ? cookie.getCookie("CITY_ID")[1] : 110110
    let params = {
        cityId: cityID,
        k: 5046733
      };
    let host = "mall.film-ticket.cinema.recommend";
    let result = await http.get({ params, host });
    this.recently = result.data.cinemas;
    this.local();

    let host_list = "mall.film-ticket.cinema.list";
    let result_list = await http.get({ params, host: host_list });
    this.cityList = result_list.data.cinemas;
    Indicator.close();

  },
  methods: {
    cancel() {
      this.$router.push("/cinemas");
    },
    local() {
      let msg = [this.message];
      let loc = JSON.parse(localStorage.getItem("movieSearchHistory"));
      if (loc) {
        msg = [this.message, ...loc];
      } else {
        msg = [this.message];
      }

      if (!(this.message === "") && loc instanceof Array) {
        var bool = loc.some(item => {
          return item == this.message;
        });
        if (!bool) {
          localStorage.setItem("movieSearchHistory", JSON.stringify(msg));
        }
      } else if (!(this.message === "")) {
        localStorage.setItem("movieSearchHistory", JSON.stringify(msg));
      }
      loc = JSON.parse(localStorage.getItem("movieSearchHistory"));
      this.history = loc;
    },
    clearAll() {
      localStorage.removeItem("movieSearchHistory");
      this.history = JSON.parse(localStorage.getItem("movieSearchHistory"));
    },
    clearOne(historyItem) {
      let loc = JSON.parse(localStorage.getItem("movieSearchHistory"));
      if (loc.length === 1) {
        localStorage.removeItem("movieSearchHistory");
        this.history = JSON.parse(localStorage.getItem("movieSearchHistory"));
      } else {
        let result = loc.filter(item => {
          return item != historyItem;
        });

        localStorage.setItem("movieSearchHistory", JSON.stringify(result));
      }
      this.history = JSON.parse(localStorage.getItem("movieSearchHistory"));
    },
    changeMessage(msg) {
      // uncode编码，可能需要
      //    console.log(escape(msg).replace(/\%u/g,'/u'))s
      var reg = new RegExp(msg, "gi");
      let obj = this.cityList;
      this.exp.length = 0;
      if (msg) {
        for (let i in obj) {
          if (reg.test(obj[i].address) || reg.test(obj[i].name)) {
            this.exp.push(obj[i]);
          }
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.main, body {
  height: 100%;
}

.cinemas-search {
  height: 100%;
  color: #191a1b;
  display: flex;
  flex-direction: column;
}

.historyScroll {
  flex: 1;
  height: 100%;
  overflow: scroll;
}

.cinemas-search .cinemas-search-input {
  z-index: 3005;
  height: 0.49rem;
  width: 100vw;
  padding: 0.095rem 0.15rem;
  background-color: #fff;
}

.cinemas-search .cinema-init-area {
  z-index: 3000;
  flex: 1;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.cinemas-search .cinema-search-result {
  z-index: 3004;
  position: absolute;
  top: 0.49rem;
  bottom: 0;
  left: 0;
  background-color: #fff;
  height: calc(100vh - 0.49rem);
  width: 100vw;
  overflow-y: auto;
}

.cinemas-search .cinema-init-area .init-list:first-child:after {
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

.cinemas-search .cinemas-search-input .onFocus {
  width: calc(100% - 0.43rem);
}

.cinemas-search .cinemas-search-input .input-wrap {
  background-color: #f4f4f4;
  position: relative;
  display: inline-block;
  border-radius: 3px;
  height: 0.3rem;
}

.cinemas-search .cinemas-search-input .cancel-btn {
  width: 0.43rem;
  position: absolute;
  display: inline-block;
  text-align: right;
  font-size: 0.14rem;
  line-height: 0.3rem;
}

.cinemas-search .cinemas-search-input:after {
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

.cinemas-search .cinemas-search-input .input-wrap .clean-icon {
  position: absolute;
  right: 7px;
  top: 0;
  line-height: 0.3rem;
  font-size: 0.21rem;
  color: #797d82;
}

.cinemas-search .cinemas-search-input .cancel-btn {
  width: 43px;
  position: absolute;
  display: inline-block;
  text-align: right;
  font-size: 14px;
  line-height: 0.3rem;
}

.cinemas-search .cinemas-search-input .input-wrap .search-input {
  position: absolute;
  left: 33 0.05rem;
  top: 0;
  height: 0.3rem;
  width: calc(100% - 0.65rem);
  border: 0;
  background: #f4f4f4;
}

body, button, input, select, table, textarea {
  font: 0.12rem / 1.5 Tahoma, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-weight: normal;
  font-stretch: normal;
  font-size: 0.12rem;
  line-height: 1.5;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: #2c3e50;
}

.cinemas-search .cinema-init-area .init-list {
  padding: 0 0.15rem 8px 0;
  margin-left: 0.15rem;
  position: relative;
}

.cinemas-search .cinema-init-area .init-list .cinema-index-title {
  font-size: 13px;
  line-height: 13px;
  color: #bdc0c5;
  margin: 18px 0;
}

.cinemas-search .cinema-init-area .init-list .cinema-index-detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-line-pack: center;
  align-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.cinemas-search ul:after, .cinemas-search ul:before {
  content: '';
  display: table;
}

.cinemas-search ul:after {
  clear: both;
}

.cinemas-search .cinema-init-area .clean-history {
  color: #d2d6dc;
  height: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 13px;
  position: relative;
  color: #bdc0c5;
}

.cinemas-search .cinema-init-area .search-history {
  margin-left: 0.15rem;
  position: relative;
}

.cinemas-search .cinema-init-area .search-history .cinema-index-title {
  font-size: 13px;
  line-height: 13px;
  color: #bdc0c5;
  padding: 18px 0;
  position: relative;
}

.cinemas-search .cinema-init-area .search-history .cinema-index-title:after {
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

.cinemas-search .cinema-init-area .search-history .mint-cell-swipe {
  position: relative;
}

.mint-cell:last-child {
  background-image: -webkit-linear-gradient(bottom, #d9d9d9, #d9d9d9 50%, transparent 0);
  background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 0);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: bottom;
}

.mint-cell {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 48px;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
}

.cinemas-search .cinema-init-area .search-history .mint-cell-swipe .mint-cell-wrapper {
  padding-left: 0;
}

.mint-cell:first-child .mint-cell-wrapper {
  background-origin: border-box;
}

.mint-cell-swipe .mint-cell-wrapper {
  position: relative;
}

.mint-cell-swipe .mint-cell-left, .mint-cell-swipe .mint-cell-right, .mint-cell-swipe .mint-cell-wrapper {
  -webkit-transition: -webkit-transform 0.15s ease-in-out;
  transition: -webkit-transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
}

.mint-cell-wrapper {
  background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 0);
  background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 0);
  background-size: 120% 1px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-origin: content-box;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 16px;
  line-height: 1;
  min-height: inherit;
  overflow: hidden;
  padding: 0 0.1rem;
  width: 100%;
}

.mint-cell-title {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mint-cell-value {
  color: #888;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.cinemas-search .cinema-init-area .search-history .history-icon {
  color: #bdc0c5;
  padding-right: 0.05rem;
}

.icon-time_btn_play:before {
  content: '\E673';
}

.mint-cell-right {
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}

.mint-cell-swipe-buttongroup {
  height: 100%;
}

.cinemas-search .cinema-init-area .search-history .mint-cell-swipe:after {
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

.mint-cell-swipe-button {
  height: 100%;
  display: inline-block;
  padding: 0 0.1rem;
  line-height: 48px;
}

.mint-cell-text {
  vertical-align: middle;
}

.mint-cell-text {
  font-size: 13px;
  color: #191a1b;
}

.cinemas-search .cinema-search-result .empty-result {
  position: absolute;
  top: 107px;
  width: 100%;
  text-align: center;
}

.cinemas-search .cinema-search-result .empty-result img {
  width: 90px;
  margin: auto;
}

.cinemas-search .cinema-search-result .empty-result p {
  color: #bdc0c5;
  font-size: 14px;
  margin: 0;
}

.cinemas-search .cinema-search-result .empty-result .empty-list-tip {
  font-size: 0.11rem;
  padding: 0 22vw;
}

.cinemas-search .cinema-search-result .cinema-search-result-list ul {
  padding-left: 0.15rem;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li {
  height: 0.45rem;
  position: relative;
  background-color: #fff;
  padding: 0.15rem;
  padding-left: 0;
  box-sizing: content-box;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li .cinema-item-wrap {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li:after {
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

.cinemas-search .cinema-search-result .cinema-search-result-list li .cinema-item-wrap .cinema-info-lf {
  width: calc(100% - 0.65rem);
  text-align: left;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li .cinema-item-wrap .cinema-info-rt {
  width: 0.65rem;
  text-align: right;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li .cinema-item-wrap .cinema-info-lf .cinema-name {
  color: #191a1b;
  font-size: 0.15rem;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li .cinema-item-wrap .cinema-info-lf span {
  display: block;
  width: 100%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li .cinema-item-wrap .cinema-info-lf .cinema-address {
  color: #797d82;
  font-size: 0.12rem;
  margin-top: 0.05rem;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li .cinema-item-wrap .cinema-info-rt .cinema-gpsAddress {
  display: block;
  font-size: 0.11rem;
  color: #797d82;
  margin-top: 0.05rem;
}

.price-fmt {
  font-size: 0.15rem;
  color: #ff5f16;
  height: 0 !important;
  display: inline-table !important;
}

.price-fmt i {
  font-size: 0.11rem;
  font-style: normal;
}

.cinemas-search .cinema-search-result .cinema-search-result-list li .cinema-item-wrap .cinema-info-rt .upon {
  color: #ff5f16;
  font-size: 0.1rem;
}

.price-fmt, .price-fmt span {
  float: none !important;
}

.price-fmt, .price-fmt span {
  float: none !important;
}

.cinemas-search .cinemas-search-input .input-wrap .search-icon {
  position: absolute;
  left: 0.07rem;
  top: 0;
  line-height: 0.3rem;
  font-size: 0.21rem;
  color: #797d82;
}

.icon-sousuo-sousuofangdajing:before {
  content: '\E62F';
}
</style>
