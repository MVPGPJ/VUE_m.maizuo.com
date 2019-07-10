<template>
  <div class="tabs-bar-wrapper">
    <div class="tabs-bar">
      <ul class="tabs-nav">
        <router-link to="/films/nowPlaying" tag="li" 
        active-class="active" 
        @click.native="handleClick(0)"
        style="width: 50%;" name="nowPlaying">
          <span>正在热映</span>
        </router-link>

        <router-link to="/films/comingSoon" tag="li"  
        active-class="active"
        @click.native="handleClick(100)"
        style="width: 50%;" name="comingSoon">
          <span>即将上映</span>
        </router-link>

        <div class="tab-ink-bar-wrapper" :style="mystyle">
            <span class="tab-ink-bar" style="width: 56px;"></span>
        </div>
           
      </ul>
    </div>
  </div>
</template>


<script>
export default {
    data() {
      return {
        mystyle:{
          transform: 'translate3d(0%, 0px, 0px)',
          width: '50%',
        }
      }
    },
    created() {
      this.mystyle.transform = this.$route.name == "comingSoon" ? `translate3d(100%, 0px, 0px)` : 'translate3d(0%, 0px, 0px)'
    },
    computed: {
      
    },
    methods: {
      handleClick(value){
         return this.mystyle.transform = `translate3d(${value}%, 0px, 0px)`
      }
    },  
}
</script>

<style lang="stylus" scoped>
.tabs-bar-wrapper {
    position: relative;
    z-index: 100;
    width: 100%;
    overflow-x: hidden;
    background: #fff;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.tabs-bar-wrapper .tabs-bar {
    height: 0.49rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-transition: -webkit-transform .2s cubic-bezier(.35,0,.25,1);
    transition: -webkit-transform .2s cubic-bezier(.35,0,.25,1);
    -o-transition: transform .2s cubic-bezier(.35,0,.25,1);
    transition: transform .2s cubic-bezier(.35,0,.25,1);
    transition: transform .2s cubic-bezier(.35,0,.25,1),-webkit-transform .2s cubic-bezier(.35,0,.25,1);
    position: relative;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    width: 100%;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li.active {
    color: #ff5f16;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
    color: #191a1b;
    text-align: center;
    height: 0.16rem;
    line-height: 0.16rem;
    font-size: 0.14rem;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper {
    position: absolute;
    margin: auto;
    top: 0.3rem;
    left: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: -webkit-transform .2s cubic-bezier(.35,0,.25,1);
    transition: -webkit-transform .2s cubic-bezier(.35,0,.25,1);
    -o-transition: transform .2s cubic-bezier(.35,0,.25,1);
    transition: transform .2s cubic-bezier(.35,0,.25,1);
    transition: transform .2s cubic-bezier(.35,0,.25,1),-webkit-transform .2s cubic-bezier(.35,0,.25,1);
}
.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper .tab-ink-bar {
    border-bottom: 0.02rem solid #ff5f16;
    border-radius: 0.2rem;
    display: block;
    margin: auto;
}
.tabs-bar-wrapper .tabs-bar:after {
    content: " ";
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
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}
</style>
