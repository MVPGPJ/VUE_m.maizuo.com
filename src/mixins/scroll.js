import Vue from 'vue'
import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'

Vue.mixin({
    methods: {
      async scroll({vm,container,params,host}) {
          Indicator.open()
          var result = await http.get({params,host})
          vm.moviesList = result.data.films
          var total = result.data.total
          var pagesize = params.pageSize
  
          Indicator.close()

          var bScroll = new BScroll(container, {
            pullUpLoad: true,
            click: true
          })
       
          bScroll.on('pullingUp', async function() {
            
            if (params.pageNum < total/pagesize) {
              params.pageNum = ++params.pageNum 
              
              Indicator.open()
              vm.moviesList = [...vm.moviesList, ...(await http.get({params,host})).data.films]
      
              vm.$nextTick(() => {
                this.refresh()
                this.finishPullUp()
                
                Indicator.close()
              })
    
            } else {
              this.finishPullUp()
              // Toast({
              //   message: '没了，别拉了！',
              //   position: 'bottom',
              //   duration: 2000
              // }) 
            }
          })
      },

    }
})