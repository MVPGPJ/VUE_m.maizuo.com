<template>
  <div class="main">
    <div class="city-list">
      <div class="header">
        <div class="left" @click="handleBack">
          <i class="iconfont icon-tubiaoguifan2" style="font-size: 0.15rem;">返回</i>
        </div>
        <div class="title">当前城市 - {{city}}</div>
      </div>

      <div class="search-city-input">
        <div class="input-wrap" :class="{'onFocus': onFocus}">
          <i class="search-icon iconfont icon-sousuo-sousuofangdajing" style="font-size: 20px;"></i>
          <input
            @focus="focus"
            type="text"
            placeholder="输入城市名或拼音"
            class="search-input"
            v-model="searchInput"
            @keyup="changeMessage(searchInput)"
          />
          <div class="clean-icon">
            <i class="iconfont icon-chongzhi-qingchu" style="font-size: 20px; display: none;"></i>
          </div>
        </div>
        <div class="cancel-btn" v-if="onFocus" @click="clearMsg">取消</div>
      </div>

      <div class="bScroll">
        <mt-index-list class="city-index">
          <div class="recommend-city">
            <div class="gprs-city">
              <div class="city-index-title">GPS定位你所在城市</div>
              <ul class="city-index-detail cleanfix">
                <li class="city-item-detail city-item-detail-gprs">
                  <div class="city-item-text">定位失败</div>
                </li>
              </ul>
            </div>
            <div class="hot-city">
              <div class="city-index-title">热门城市</div>
              <ul class="city-index-detail cleanfix">
                <li
                  class="city-item-detail"
                  v-for="hotCity in hotCities"
                  :key="hotCity.cityId"
                  :id="hotCity.cityId"
                  @click="handleSave(hotCity.cityId,hotCity.name)"
                >
                  <div class="city-item-text">{{hotCity.name}}</div>
                </li>
              </ul>
            </div>
          </div>
          <mt-index-section v-for="(value,key) in typeCities" :key="key" :index="key">
            <mt-cell
              :title="item.name"
              v-for="item in value"
              :key="item.cityId"
              @click.native="handleSave(item.cityId,item.name)"
            ></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>

      <div v-if="searchInput" class="city-search-result">
        <div class="city-search-result-list" v-if="exp">
          <ul>
            <li
              v-for="expItem in exp"
              @click="handleSave(expItem.cityId,expItem.name)"
              :key="expItem.cityId"
            >{{expItem.name}}</li>
          </ul>
        </div>
        <div class="empty-result" v-if="exp.length ===0">
          <img
            src="data:image/png;base64,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"
            alt
          />
          <p>没有找到匹配的城市</p>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import Vue from "vue";
import http from "../../utils/http";
import cookie from "../../utils/cookie";
import { Search, IndexList, IndexSection, Cell } from "mint-ui";
import { Indicator, Toast } from "mint-ui";
import BScroll from "better-scroll";
Vue.component(Cell.name, Cell);
Vue.component(Search.name, Search);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
  data() {
    return {
      searchInput: "",
      city: "",
      onFocus: false,
      hotCities: [],
      allCities: [],
      //修改数据并分组
      typeCities: {},
      //暂存搜索成功的数组
      exp: [],
      upWords: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
    focus() {
      this.onFocus = true;
    },
    clearMsg() {
      this.searchInput = "";
      this.onFocus = false;
    },
    handleSave(id, name) {
      cookie.setCookie("CITY_NAME", name, 1);
      cookie.setCookie("CITY_ID", id, 1);
      this.$router.push("/");
    },
    changeMessage(msg) {
      var reg = new RegExp(msg, "gi");
      this.exp.length = 0;
      if (msg) {
        for (let i in this.allCities) {
          if (reg.test(this.allCities[i].pinyin) ||reg.test(this.allCities[i].name)) {
            this.exp.push(this.allCities[i]);
          }
        }
      }
    }
  },
  async mounted() {
    Indicator.open({
      text: "城市即将展示",
      spinnerType: "fading-circle"
    });
    let host = "mall.film-ticket.city.list";
    let params = {
      k: 6972794
    };
    let result = await http.get({ params, host });
    this.allCities = result.data.cities;
    Indicator.close();
    this.hotCities.length = 0;
    this.allCities.forEach(item => {
      item.isHot === 1 ? this.hotCities.push(item) : "";
    });

    this.allCities.forEach(item => {
      this.upWords.forEach(index => {
        if (!this.typeCities[index]) {
          this.typeCities[index] = [];
        }
        if (item.pinyin.substr(0, 1).toUpperCase() === index) {
          this.typeCities[index].push(item);
        }
      });
    });

    let name = cookie.getCookie("CITY_NAME");
    this.city = name[1];

    // var bScroll = new BScroll(".bScroll", {
    //   pullUpLoad: true,
    //   click: true
    // });
    // bScroll.on("pullingUp", () => {});
  }
};
</script>

<style lang="stylus" scoped>
.bScroll {
  height: 100%;
}
>>>.mint-indexlist-navitem,.mint-indexlist-navlist.mint-indexlist-nav{
  touch-action: none;
}
.city-list .city-search-result .empty-result {
  position: absolute;
  top: 107px;
  width: 100%;
  text-align: center;
}

.city-list .city-search-result .empty-result p {
  color: #bdc0c5;
  font-size: 14px;
  margin: 0;
}

.city-list .city-search-result .empty-result img {
  width: 90px;
  margin: auto;
}

.city-list .city-search-result {
  z-index: 1999;
  position: fixed;
  top: 44px;
  left: 0;
  background-color: #fff;
  height: calc(100vh - 49px);
  width: 100vw;
  overflow-y: auto;
}

.city-list .city-search-result .city-search-result-list ul {
  padding-left: 15px;
  padding-top: 49px;
}

.city-list .city-search-result .city-search-result-list li:after {
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

.city-list .city-search-result .city-search-result-list li {
  height: 44px;
  position: relative;
  line-height: 44px;
  color: #191a1b;
  font-size: 13px;
}

>>> .mint-cell-text {
  background-color: #fff;
  height: 100%;
  line-height: 0.48rem;
  font-size: 0.14rem;
}

>>> .mint-indexsection-index + ul {
  padding: 0 0 0 0.1rem;
}

.city-list .city-index >>> .mint-indexlist-content .mint-indexsection-index {
  background-color: #f4f4f4;
  color: #797d82;
  padding: 0 0 0 15px;
  height: 30px;
  line-height: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.city-list >>> .mint-indexlist-nav {
  border-left: 0px;
}

.city-list .city-item-detail .city-item-text {
  height: 0.3rem;
  background-color: #f4f4f4;
  line-height: 0.3rem;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 0.075rem;
  font-size: 0.14rem;
  color: #191a1b;
}

.city-list .city-index .city-index-detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-line-pack: center;
  align-content: center;
  flex-wrap: wrap;
}

.city-list .city-item-detail {
  width: calc(((100vw - 0.33rem) / 3));
  text-align: center;
  padding-bottom: 0.15rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
}

.city-list .city-index :nth-child(3n-2):after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.01rem;
  border-bottom: 0.01rem solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.city-list .city-index .city-index-title {
  font-size: 0.13rem;
  color: #797d82;
  margin-bottom: 0.1rem;
}

.city-list .recommend-city {
  background-color: #fff;
  padding-left: 0.15rem;
  padding-top: 0.15rem;
}

.city-list .city-index {
  padding-top: 0.54rem;
}

.city-list .search-city-input .onFocus {
  width: calc(100% - 0.43rem) !important;
}

.mint-searchbar {
  z-index: 2000;
  height: 0.49rem;
  width: 100vw;
  padding: 0.095rem 0.15rem;
  background-color: #f4f4f4;
  position: fixed;
  top: 0.44rem;
}

.icon-sousuo-sousuofangdajing:before {
  content: '\E604';
}

.city-list, .city-list .header {
  background-color: #fff;
}

.city-list .header {
  top: 0;
  left: 0;
  width: 100%;
  height: 0.44rem;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 300;
}

.city-list .header > div {
  float: left;
  height: 0.44rem;
}

.city-list .header:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.01rem;
  border-bottom: 0.01rem solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.city-list .header i {
  display: block;
  font-size: 23px;
  color: #191a1b;
}

.city-list .header .left {
  width: 14%;
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

.city-list .header .left > i {
  margin-left: 0.1rem;
}

.city-list .header .title {
  width: 72%;
  text-align: center;
  font-size: 17px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #191a1b;
}

.city-list .header .title div {
  color: #191a1b;
}

.city-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.city-list ul:after, .city-list ul:before {
  content: '';
  display: table;
}

.city-list ul:after {
  clear: both;
}

.city-list .search-city-input {
  z-index: 2000;
  height: 0.49rem;
  width: 100vw;
  padding: 0.095rem 0.15rem;
  background-color: #f4f4f4;
  position: fixed;
  top: 0.44rem;
}

.city-list .search-city-input .cancel-btn {
  width: 0.43rem;
  position: absolute;
  display: inline-block;
  text-align: right;
  font-size: 0.14rem;
  line-height: 0.3rem;
  color: #2c3e50;
}

.city-list .search-city-input .input-wrap {
  background-color: #fff;
  position: relative;
  display: inline-block;
  border-radius: 3px;
  width: 100%;
  height: 0.3rem;
}

.city-list .search-city-input .input-wrap .search-icon {
  position: absolute;
  left: 7px;
  top: 0;
  line-height: 0.3rem;
  font-size: 20.01rem;
  color: #797d82;
}

.city-list .search-city-input .input-wrap .search-input {
  position: absolute;
  left: 33.5px;
  top: 0;
  height: 0.3rem;
  width: calc(100% - 65px);
  border: 0;
}

.city-list {
  .search-city-input, .input-wrap, .search-input::-webkit-input-placeholder {
    color: #bdc0c5;
  }

  .city-list .search-city-input .input-wrap .search-input:-moz-placeholder, .city-list .search-city-input .input-wrap .search-input::-moz-placeholder {
    color: #bdc0c5;
  }

  .city-list .search-city-input .input-wrap .search-input:-ms-input-placeholder {
    color: #bdc0c5;
  }

  .city-list .search-city-input .input-wrap .clean-icon {
    position: absolute;
    right: 7px;
    top: 0;
    line-height: 0.3rem;
    font-size: 20.01rem;
    color: #bdc0c5;
  }

  .city-list .search-city-input .onFocus {
    width: calc(100% - 0.43rem);
  }

  .city-list .recommend-city {
    background-color: #fff;
    padding-left: 0.15rem;
    padding-top: 0.15rem;
  }

  .city-list .recommend-city .city-index-title {
    font-size: 0.13rem;
    color: #797d82;
    margin-bottom: 0.1rem;
  }

  .city-list .city-index-section ul, .city-list .recommend-city .city-index-detail {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-line-pack: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .city-list .city-index-section ul {
    padding: 0 0 0 20px;
  }

  .city-list .city-index-section ul .city-item-detail-white {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 0.48rem;
    width: 100%;
  }

  .city-list .city-index-section ul .city-item-detail-white .in-section {
    background-color: #fff;
    height: 100%;
    line-height: 0.48rem;
    font-size: 0.14rem;
  }

  .city-list .city-index-section ul .city-item-detail-white {
    color: #191a1b;
  }

  .city-list .city-index-section ul .city-item-detail-white:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0.01rem;
    border-bottom: 0.01rem solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .city-list .city-item-detail {
    width: calc(((100vw - 0.33rem) / 3));
    text-align: center;
    padding-bottom: 0.15rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
  }

  .city-list .city-item-detail .city-item-text {
    height: 0.3rem;
    background-color: #f4f4f4;
    line-height: 0.3rem;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 0.075rem;
    font-size: 0.14rem;
    color: #191a1b;
  }

  .city-list .city-index {
    padding-top: 94px;
  }

  .city-list .city-index .city-index-title {
    font-size: 0.13rem;
    color: #797d82;
    margin-bottom: 0.1rem;
  }

  .city-list .city-index .city-index-detail {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-line-pack: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .city-list .city-index :nth-child(3n-2):after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0.01rem;
    border-bottom: 0.01rem solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .city-list .city-index .mint-indexlist-content {
    z-index: 3000;
    height: 100vh !important;
  }

  .city-list .city-index .mint-indexlist-content .mint-indexsection-index {
    background-color: #f4f4f4;
    color: #797d82;
    padding: 0 0 0 0.15rem;
    height: 0.3rem;
    line-height: 0.3rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .city-list .city-index .mint-indexlist-nav {
    border: 0;
    position: fixed;
    z-index: 1999;
    width: 17px;
    margin-top: 94px;
  }

  .city-list .city-index .mint-indexlist-nav .mint-indexlist-navitem {
    font-size: 10.01rem;
    padding: 0 6px;
    color: #191a1b;
  }

  .city-list .city-index .mint-indexlist-indicator {
    z-index: 3008;
  }

  .city-list .city-search-result {
    z-index: 1999;
    position: fixed;
    top: 0.44rem;
    left: 0;
    background-color: #fff;
    height: calc(100vh - 0.49rem);
    width: 100vw;
    overflow-y: auto;
  }

  .city-list .city-search-result .empty-result {
    position: absolute;
    top: 107px;
    width: 100%;
    text-align: center;
  }

  .city-list .city-search-result .empty-result img {
    width: 90px;
    margin: auto;
  }

  .city-list .city-search-result .empty-result p {
    color: #bdc0c5;
    font-size: 0.14rem;
    margin: 0;
  }

  .city-list .city-search-result .city-search-result-list ul {
    padding-left: 0.15rem;
    padding-top: 0.49rem;
  }

  .city-list .city-search-result .city-search-result-list li {
    height: 0.44rem;
    position: relative;
    line-height: 0.44rem;
    color: #191a1b;
    font-size: 0.13rem;
  }

  .city-list .city-search-result .city-search-result-list li:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0.01rem;
    border-bottom: 0.01rem solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>

