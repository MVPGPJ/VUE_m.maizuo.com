<template>



    <div class="film-list-content" id="">
    <div class="nowPlayingList-wrap">
      <ul infinite-scroll-disabled="loading" infinite-scroll-distance="100" class="nowPlayingList">
          <Moviesitem v-for="movie in moviesList" :movie="movie" :key="movie.flimId" from="ComingSoon"></Moviesitem>
        </ul>
    </div>
  </div>
  
</template>


<script>
import BScroll from 'better-scroll'
import http from '../../utils/http'
import cookie from "../../utils/cookie";
import Moviesitem from '../../components/Moviesitem'
export default {
  data() {
    return {
      moviesList : []
    }
  },
  components:{
    Moviesitem
  },

  async mounted() {
    this.$parent.id='ComingSoon'
    let host = "mall.film-ticket.film.list"
    let cityID = cookie.getCookie("CITY_ID") ? cookie.getCookie("CITY_ID")[1] : 110110
    let params = {
        cityId: cityID,
        pageNum: 1,
        pageSize: 10,
        type: 2,
        k: 2478483,
      }

    this.$nextTick(async () => {
      await this.scroll({vm:this,container:'#ComingSoon',params,host})

    })
  },
  
};
</script>

<style lang="stylus" scoped>
div {
  box-sizing: border-box;
}

.nowPlayingList-wrap {
  background-color: #fff;
}

.nowPlayingList-wrap ul {
  list-style: none;
  padding: 0;
  margin-left: 0.15rem;
  margin-bottom: 0;
  margin-top: 0;
}

</style>
