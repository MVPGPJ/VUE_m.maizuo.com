<template>
  <router-view></router-view>
</template>

<script>
import http from "../../../utils/http";
export default {
  async mounted() {
    let result_film = await http.get({
        params:{
            cinemaId: this.$route.params.id
        },
        host: "mall.film-ticket.film.cinema-show-film"
    })
    let show = result_film.data.films
    this.$router.replace(this.$route.fullPath+'/'+show[0].filmId)
  }
};
</script>