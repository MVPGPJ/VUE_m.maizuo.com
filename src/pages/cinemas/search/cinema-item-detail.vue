<template>
  <li class="cinema-item-detail" :id="recentlyItem.cinemaId">
    <div class="cinema-item-text">{{recentlyItem.name}}</div>
  </li>
</template>

<script>
export default {
  props: {
    recentlyItem: Object
  }
};
</script>

<style lang="stylus" scoped>
.cinemas-search .cinema-init-area .init-list .cinema-item-detail {
  text-align: center;
  padding-bottom: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
}
.cinemas-search .cinema-init-area .init-list .cinema-item-detail .cinema-item-text {
    height: 30px;
    background-color: hsla(0,0%,96%,.6);
    line-height: 14px;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 13px;
    padding: 8px 12px;
}
</style>
