<template>

<div class="page news">
    <div>
        <div>
            <h4 v-text="newsInfo.title"></h4>
                <p>
                    <span>发表时间{{newsInfo.add_time}}</span>
                    <span class="mui-pull-right">点击：{{newsInfo.click}}次</span>
                </p>
            <hr>
        </div>
        <div v-html="newsInfo.content" class="new-content">

        </div>
    </div>
    <div class="new-comment">
        <comment :id="$route.params.id"></comment>
    </div>
</div>
    
</template>

<script>
import axios from "axios"

import dateformat from "../../filters/dateformat"

import comment from "../common/comment"
export default {
  data(){
      return{
          newsInfo:{}
      }
  },
  created(){
      axios({
          url:"http://www.escook.cn:3000/api/getnew/" + this.$route.params.id,
      }).then(res => {
          this.newsInfo = res.data.message[0]
      })
  },
  filters: {
      dateformat
  },
  components:{
      comment
  }

}
</script>

<style>
.news{
    padding-left: 10px;
    padding-right: 10px;
}
.new-content img{
    width: 100%;
}
.new-comment{
    margin-bottom: 10px;
}
</style>

