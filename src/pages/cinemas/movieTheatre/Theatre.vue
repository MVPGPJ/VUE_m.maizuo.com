<template>
  <div class="main">
    <div class="cinema-schedule" data-enter-time="1562939482">
      <div @click="routeBack" class="header-left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg=="
          width="11px"
          height="18px"
          style
        />
      </div>
      <div class="header-title">{{movieTheatre.name}}</div>
      <div class="cinema-wrap" style>
        <div class="cinema-info" style>
          <div class="tags">
            <div
              v-for="service in movieTheatre.services"
              :key="service.name"
              class="tag"
            >{{service.name}}</div>
            <i
              class="tag-more iconfont icon-quanju_liebiaojiantou"
              style="font-size: 0.12rem;"
            >&nbsp;</i>
          </div>
          <div class="address">
            <img
              src="data:image/png;base64,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"
              width="14px"
              height="21px"
              alt
            />
            <div
              class="address-des"
              data-enter-time="1562939482"
              data-click-fun="track_f_671349"
            >{{movieTheatre.address}}</div>
            <a
              href="tel:021-66776360"
              class="tel-icon"
              data-enter-time="1562939482"
              data-click-fun="track_f_59854"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMZHBwZMzMZGhsZGxsZGhsZGhv///8ZGxsbGxsfHx8kJCQaGh0bGxsZGhsZJiYqKioaGhwZHR0ZGhsZGhsZGxsZGhsaGh5VVVV/f38ZGhscHBwZGhsZGhsaGigZGhsZGhwZGhsZGhsaGh8ZGhsaGhsbGxsaGhsaGhsZHBwaGh0fHx8nJycZGhwZGxscHBwZGxsZGhscHBwbGxsZGxsaGhsaGhscHBwaGiAZGxsaGhsaGhwZHBwZGxsaGh4ZGhsZGhsZGhsZGxsZGhscHBwZGhsaGhwdHR0fHx8ZGhwZGxsZGhwkJCQaGiMZGhsZGhsbGxsdHR0ZGhsbGxsaGhsaGhsaGhsZGxscHBwbGxsZGxsZGhwZHx8ZGxsaGhseHh4aGh0cHBwbGxsZHh4bGxsaGhsZGhweHh4ZGxsZGxsZGhsZHh4ZGxsaGhseHh4cHBw/Pz8ZGhsfHx8ZGxsZGxsZGhsaGh0ZGxsZGhwcHBwaGhsaGhwbGxsZGhwZGhwZGxsZGhsZGhwZGxsaGhsiIiIZGhsZGhscHBwZHBwaGhwqKioZGhwZGhsaGh8ZIiIaGhseHh4ZGxsaGhwbGxsbGxsZGxsZGxsZGhsaGh8ZGhwaGh0ZGhsZGhsZGxsZGhwaGh0aGhwZHBwaGhwbGxsZGxsaGh0ZGxsbGxsfHx8eHh4ZGhsdHR0ZGhsbGxsZGhsZGhsZHR0ZGhsZGhwaGhwZGhuqFRxRAAAAtnRSTlMAFwVZCvqy/v0Bl2cQB2kl5RQGYT3M+NnKQwMC8iTq8BP7vfbtMO65QsOldk4gDceDPs75G16zkq4SJ52TiFtuTOfd5Kr3CfR/Iwi1oNoVHfPWcTS3L5u6nLtISWW/KHfrImg/SjNBxLQqlajUO8bXITUE6RiEje9Wiq029WpA45mx0qNvpBbByy1kYgyr5jkerxGMkS43eGbbMch78dWe0V+FbHxUgXJ5XCkZ4CvJOOj8RdOYkJ3guaYAAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m025DUH9jQHJmUC7Ennma7QIS5JXqT1o5c+EU/LoXDcgryg7qwZy5c04sJcEJR2Cy/KkzoYchSywsEfLiwAMk2MsNMqDtBqsMjmKYGSqzJbCV0U9goUyS4dvinoMLYkySofvisoeCoNltASS1eYe5MloGXxQm8oaWCqT1CrsCWqTDIdlNB9y1GaAhZ0hk5fQTz/1gd0yKYORYxTVqwOsktFkWKaInFIgSUaDYKAc6y2wO8nsBgyfoLDNwDx5cRdeyLEHugXlwXNYNEJhXYZDb3lQ3AzpcnSHC1fkwVMYX6Iw30EYG5SZrxZuyTHEglHy4BnUn5DjCdhzZZY2Ho7KUTIT6hfIrAhoL0flO/j0XmbHoSBNjuWlsKhORgk7oa8iPlZA/VSFrBjVOah4UoCzilheC5NeS4kzgHYJimct9LyoiOnlwLj+AUK2zlEcvh4wtJci3kwG9gErbbB2ZMvdpXIoHKEI30NCktU+E8jLkLsGP5zsqqjBpTCtWMrqA0zqLXcpQGF/RWX0W+NTSFM+0LGrXB2z4EiCYkzfCDTvlaszNhRMVAzfLMDfKSg3SVVQPlexdlUAsxPkpnM+WFcTFaPLBmBdqtzktgCFoxVjy3Yb9stVZQC4n1KsGB0gXXE05QMPhug3ddBzm+K5U0Cr+VP1q8RqGKj4xtysAKxhB4KKCnYEa7X+JOuan1a3X71V2OKZwBQZlJ0n5HNg3pc5KQE/MEhmp/vW8lNVd3mSllRtEWZVX5dnixfOmj1txpSJ+t9+AAZEC6aFGvT2AAAAAElFTkSuQmCC"
                width="17px"
                height="18px"
                alt
              />
            </a>
          </div>
        </div>
        <div class="schedule-wrap">
          <div class="film-bg">
            <div class="img" :style="'background-image: url(&quot;'+bg+';'"></div>
          </div>
          <div class="film-list">
            <swiper @touchEnd="swiperChange" :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="showFilm in showFilms" :key="showFilm.filmId" style>
                <div class="film-item">
                  <div class="img-wrap">
                    <img :src="showFilm.poster" alt />
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="triangle">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUAgMAAACCKJcoAAAACVBMVEVHcEz////////mcEUwAAAAAnRSTlMAgJsrThgAAABLSURBVAgdBcEBDQAACAMg/GYDAxnB/mkEUAuBPgjMQOAagtpaBM0hGAbB0Qi11BIajjAwhIMmaqFWNHBigBEHtNQCtWmAywBMDqAfx4oGipkmrUEAAAAASUVORK5CYII="
                width="20px"
                height="10px"
                alt
              />
            </div>
          </div>
          <div class="film-info">
            <div class="film-head">
              <span class="film-name">{{oneFilms.name}}</span>
              <span class="film-score">{{oneFilms.grade}}</span>
              <span class="film-score-unit">分</span>
            </div>
            <div
              class="film-desc"
            >{{oneFilms.director}} | {{oneFilms.runtime}}分钟 | {{oneFilms.director}} | {{actors}}</div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg=="
              width="4px"
              height="8px"
              class="film-more"
            />
          </div>
          <div class="date-list">
            <div class="tabs-bar-wrapper dateWrap">
              <div class="tabs-bar">
                <ul class="tabs-nav">
                  <li v-for="(day,index) in date" :key="day" :class="{'active':index==0}" @click="handleActive" style="padding: 0px 15px;">
                    <span>{{day}}</span>
                  </li>
                  <div
                    class="tab-ink-bar-wrapper"
                    style="transform: translate3d(00%, 0px, 0px); padding: 0px 15px;"
                  >
                    <span class="tab-ink-bar" style="width: 51px;"></span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="schedule-list">
            <div>
              <div class="schedule-item" v-for="time in movieTime" :key="time.showAt">
                <div class="left">
                  <div class="start-at">{{time.showAt}}</div>
                  <div class="end-at">{{time.endAt}}散场</div>
                </div>
                <div class="middle">
                  <div class="language">{{time.filmLanguage}}{{time.imagery}}</div>
                  <div class="hall">{{time.hallName}}</div>
                </div>
                <div class="right">
                  <div class="buy-ticket">购票</div>
                  <div class="lowest-price">
                    <span class="price-icon">￥</span>
                    {{time.salePrice/100}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="service-info" style="display: none;">
        <div class="services">
          <div class="detail clearfix">
            <div class="left">停车</div>
            <div class="right">凭影票免费停车3小时</div>
          </div>
          <div class="detail clearfix">
            <div class="left">3D眼镜</div>
            <div class="right">免费提供3D眼镜（常规、夹片、儿童款）</div>
          </div>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import http from "../../../utils/http";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import moment from "moment";
let index = 0;
export default {
  data() {
    return {
      movieTheatre: {},
      showFilms: [],
      movieTime: [],
      oneFilms: {},
      actors: "",
      date: [],
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 16,
        on: {
          slideChangeTransitionEnd: function() {
            index = this.activeIndex;
          }
        }
      },
      bg: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  async mounted() {
    moment.locale("zh-cn");
    //影院信息
    let result = await http.get({
      params: {
        cinemaId: this.$route.params.id
      },
      host: "mall.film-ticket.cinema.info"
    });
    this.movieTheatre = result.data.cinema;

    //电影信息

    let result_film = await http.get({
      params: {
        cinemaId: this.$route.params.id
      },
      host: "mall.film-ticket.film.cinema-show-film"
    });
    this.showFilms = result_film.data.films;
    this.oneFilms = this.showFilms[0];
    this.oneFilms.showDate.forEach(i => {
      moment.locale("zh-cn");
      let _a = moment(i * 1000)
        .format("MMM Do")
        .replace(/\s*/g, "");
      this.date.push(_a);
    });
    this.bg = this.showFilms[0].poster;
    this.oneFilms.actors.forEach(i => {
      this.actors += i.name + " ";
    });
    // console.log(this.oneFilms)
    //电影时间信息
    let time = Date.parse(new Date());
    let result_time = await http.get({
      params: {
        cinemaId: this.$route.params.id,
        filmId: this.$route.params.ids,
        date: time / 1000
      },
      host: "mall.film-ticket.schedule.list"
    });
    if (result_time.msg !== "数据为空") {
      this.movieTime = result_time.data.schedules;
    }
    this.movieTime.forEach((item, index) => {
      this.movieTime[index].showAt = moment(item.showAt * 1000).format("LT");
      this.movieTime[index].endAt = moment(item.endAt * 1000).format("LT");
    });
  },
  methods: {
    routeBack() {
      this.$router.go(-1);
    },
    swiperChange() {
      setTimeout(async () => {
        this.actors = "";
        this.date.length = 0;
        this.bg = this.showFilms[index].poster;
        this.$router.replace(
          "/cinemas/1701/film/" + this.showFilms[index].filmId
        );
        this.oneFilms = this.showFilms[index];
        this.oneFilms.actors.forEach(i => {
          this.actors += i.name + " ";
        });
        this.oneFilms.showDate.forEach(i => {
          moment.locale("zh-cn");
          let _a = moment(i * 1000)
            .format("MMM Do")
            .replace(/\s*/g, "");
          this.date.push(_a);
        });

        let time = this.oneFilms.showDate[0];
        let result_time = await http.get({
          params: {
            cinemaId: this.$route.params.id,
            filmId: this.$route.params.ids,
            date: time
          },
          host: "mall.film-ticket.schedule.list"
        });
        if (result_time.msg !== "数据为空") {
          this.movieTime = result_time.data.schedules;
        }
        this.movieTime.forEach((item, index) => {
          this.movieTime[index].showAt = moment(item.showAt * 1000).format(
            "LT"
          );
          this.movieTime[index].endAt = moment(item.endAt * 1000).format("LT");
        });
      }, 500);
    },
    handleActive(){

    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="stylus" scoped>
.cinema-schedule .schedule-wrap .triangle {
  top: 0.05rem;
}

.cinema-schedule .schedule-wrap .triangle {
  position: relative;
  display: flex;
  justify-content: center;
}

>>>.cinema-schedule .schedule-wrap .film-list .swiper-slide-active .film-item .img-wrap {
  width: 90px !important;
  transition: all 0.5s ease;
}

>>>.cinema-schedule .schedule-wrap .film-list .swiper-slide-active .film-item {
  padding-top: 0;
  transition: all 0.5s ease;
}

.cinema-schedule .schedule-wrap .film-list .film-item {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 26px;
  transition: all 0.5s ease;
}

.cinema-schedule .schedule-wrap .film-list .film-item .img-wrap {
  height: 104px;
}

>>>.cinema-schedule .schedule-wrap .film-list .swiper-slide-active .film-item .img-wrap {
  height: 130px !important;
}

.cinema-schedule .schedule-wrap .film-list .film-item .img-wrap {
  width: 72px;
  transition: all 0.5s ease;
}

>>>.cinema-schedule .schedule-wrap .film-list .swiper-slide-active {
  min-width: 90px !important;
}

>>>.cinema-schedule .schedule-wrap .film-list .swiper-slide-active .film-item .img-wrap {
  transition: all 0.5s ease;
}

.cinema-schedule .schedule-wrap .film-list .film-item .img-wrap img {
  width: 100% !important;
  height: 100% !important;
}

.cinema-schedule .header-left {
  position: fixed;
  top: 0;
  height: 44px;
  line-height: 44px;
  padding-left: 15px;
  z-index: 303;
}

* {
  touch-action: none;
}

.main, body {
  height: 100%;
  overflow: scroll;
}

.cinema-schedule {
  overflow: hidden;
  padding-top: 0.44rem;
  background: #fff;
  min-height: 100vh;
}

.cinema-schedule .header-left {
  position: fixed;
  top: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  padding-left: 0.15rem;
  z-index: 303;
}

.cinema-schedule .header-title {
  position: relative;
  text-align: center;
  font-size: 0.17rem;
  color: #191a1b;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding: 0 0.15rem;
  background: #fff;
  top: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  z-index: 302;
}

.cinema-schedule .service-info {
  position: fixed;
  top: 0.88rem;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  overflow: auto;
  z-index: 301;
}

.cinema-schedule .header-left img {
  vertical-align: middle;
}

.cinema-schedule .cinema-info .tags {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.15rem;
  color: #ffb232;
  overflow: hidden;
  position: relative;
  padding: 5px 0 0.15rem;
}

.cinema-schedule .cinema-info .address {
  height: 0.5rem;
  position: relative;
  display: flex;
  padding-left: 0.17rem;
  align-items: center;
}

.cinema-schedule .cinema-info .address .address-des {
  font-size: 0.14rem;
  height: 0.2rem;
  padding: 0 0.12rem;
  flex: 1;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cinema-schedule .cinema-info .address .address-des:after {
  content: ' ';
  position: absolute;
  right: 0;
  top: 0;
  width: 0.01rem;
  bottom: 0;
  border-right: 0.01rem solid #ededed;
  color: #ededed;
  transform-origin: 100% 0;
  transform: scaleX(0.5);
}

.cinema-schedule .cinema-info .address .tel-icon {
  height: 0.18rem;
  padding: 0 0.25rem;
}

.cinema-schedule .cinema-info .tags .tag {
  position: relative;
  padding: 0 0.06rem;
  margin: 0 0.025rem;
  font-size: 0.1rem;
}

.cinema-schedule .cinema-info .tags .tag:after {
  content: ' ';
  transform: scale(0.5);
  position: absolute;
  border: 0.01rem solid #ffb232;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 0.04rem;
  border-radius: 0.01rem;
}

.cinema-schedule .schedule-wrap {
  position: relative;
}

.cinema-schedule .schedule-wrap .film-bg {
  position: absolute;
  top: 0;
  height: 1.6rem;
  width: 100%;
  padding: 0.15rem 0;
  overflow: hidden;
}

.cinema-schedule .schedule-wrap .film-bg .img {
  height: 100%;
  width: 100%;
  filter: blur(0.3rem);
}

.cinema-schedule .schedule-wrap .film-list {
  height: 1.6rem;
  padding: 0.15rem 0;
  position: relative;
}

.cinema-schedule .schedule-wrap .film-info {
  width: 100%;
  background: #fff;
  height: 0.8rem;
  padding: 0.15rem 0;
  position: relative;
}

.cinema-schedule .schedule-wrap .film-info .film-head {
  margin-bottom: 0.1rem;
  text-align: center;
  line-height: 0.18rem;
}

.cinema-schedule .schedule-wrap .film-info .film-head .film-name {
  font-size: 0.15rem;
  color: #191a1b;
  padding-right: 5px;
}

.cinema-schedule .schedule-wrap .film-info .film-head .film-score {
  font-size: 0.16rem;
  font-style: italic;
  color: #ffb232;
}

.cinema-schedule .schedule-wrap .film-info .film-head .film-score-unit {
  font-size: 0.1rem;
  color: #ffb232;
}

.cinema-schedule .schedule-wrap .film-info .film-desc {
  text-align: center;
  height: 0.18rem;
  color: #797d82;
  font-size: 0.13rem;
  padding: 0 12%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cinema-schedule .schedule-wrap .film-info .film-more {
  position: absolute;
  right: 0.15rem;
  top: 0;
  margin-top: 0.36rem;
}

.cinema-schedule .schedule-wrap .film-info:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.01rem;
  border-bottom: 0.01rem solid #ededed;
  color: #ededed;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}

.cinema-schedule .schedule-wrap .date-list {
  width: 100%;
}

.tabs-bar-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.tabs-bar-wrapper .tabs-bar {
  height: 0.49rem;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  position: relative;
}

.tabs-bar-wrapper .tabs-bar .tabs-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
}

.tabs-bar-wrapper li, .tabs-bar-wrapper ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tabs-bar-wrapper .tabs-bar:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.01rem;
  border-bottom: 0.01rem solid #ededed;
  color: #ededed;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}

.tabs-bar-wrapper .tabs-bar .tabs-nav li.active {
  color: #ff5f16;
}

.tabs-bar-wrapper .tabs-bar .tabs-nav li {
  flex-shrink: 0;
  color: #191a1b;
  text-align: center;
  height: 0.16rem;
  line-height: 0.16rem;
  font-size: 0.14rem;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper {
  position: absolute;
  margin: auto;
  top: 0.3rem;
  left: 0;
  transform: translateZ(0);
  transition: -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1), ;
}

.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper .tab-ink-bar {
  border-bottom: 0.02rem solid #ff5f16;
  border-radius: 0.2rem;
  display: block;
  margin: auto;
}

.cinema-schedule .schedule-wrap .schedule-list {
  min-height: calc(100vh - 0.44rem);
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item {
  height: 0.74rem;
  padding: 0.15rem;
  position: relative;
  background: #fff;
}

.cinema-schedule .schedule-wrap .schedule-list .disable .left .end-at, .cinema-schedule .schedule-wrap .schedule-list .disable .left .start-at, .cinema-schedule .schedule-wrap .schedule-list .disable .middle .hall, .cinema-schedule .schedule-wrap .schedule-list .disable .middle .language, .cinema-schedule .schedule-wrap .schedule-list .disable .right, .cinema-schedule .schedule-wrap .schedule-list .disable {
  color: #d2d6dc !important;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item:not(:first-child):before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 0.01rem;
  border-top: 0.01rem solid #ededed;
  color: #ededed;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .left {
  float: left;
  width: 1rem;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .left .start-at {
  font-size: 0.15rem;
  color: #191a1b;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .left .end-at {
  font-size: 0.13rem;
  color: #797d82;
  margin-top: 0.02rem;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .middle {
  float: left;
  width: calc(100% - 2.4rem);
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .middle .language {
  font-size: 0.15rem;
  color: #191a1b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .middle .hall {
  font-size: 0.13rem;
  color: #797d82;
  margin-top: 0.02rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .right {
  float: right;
  padding: 0.1rem 0;
  line-height: 0.25rem;
  color: #ff5f16;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .right .buy-ticket {
  float: right;
  height: 0.25rem;
  width: 0.5rem;
  border-radius: 0.02rem;
  position: relative;
  text-align: center;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .right .lowest-price {
  float: right;
  padding-right: 0.2rem;
  font-size: 0.15rem;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .right .buy-ticket:after {
  content: ' ';
  transform: scale(0.5);
  position: absolute;
  border: 0.01rem solid #ff5f16;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 0.04rem;
}

.cinema-schedule .schedule-wrap .schedule-list .schedule-item .right .lowest-price .price-icon {
  font-size: 0.1rem;
}
</style>
