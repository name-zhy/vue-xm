<template>
  <div>
      <div>
          <h4>发表评论</h4>
          <hr>
          <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
          <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

          <ul class="mui-table-view">
              <li v-for="(v,i) in commonArrt" :key="i" class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                        <p class="comment-tilte">
                            <span >第{{i+1}}楼</span>
                            <span >发表时间：{{v.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</span> 
                            <span  class="mui-pull-right">{{v.user_name}}</span>
                        </p> 
                        <img src="../../assets/images/menu1.png" class="mui-media-object mui-pull-right" alt="">
                        <div  class="mui-media-body">
                             <p class="mui-ellipsis comment-content" v-text="v.content"></p>
                        </div>
                    </a>
                </li>
          </ul>
          <mt-button type="danger" v-show="showMoreBtn" @click="more" :plain="true" size="large" >加载更多</mt-button>
         
          
      </div>
  </div>
</template>

<script>
import axios from "axios"

import dateformat from "../../filters/dateformat"

import { Toast } from "mint-ui"

export default {
  data(){
      return {
          commonArrt:[],
          showMoreBtn:true,
          currentIndex:1,
          content:''
      }
  },
  props:["id"],
  created(){
      this.runder()
  },
  filters:{
      dateformat
  },
  methods:{
      postComment(){
          
          if(this.content.trim()){
              console.log(1);
              axios({
                  url:'http://www.escook.cn:3000/api/postcomment/'+ this.id,
                  method:'post',
                  data:'content=' +this.content
              }).then(res => {
                  if(res.data.status == 0){
                      this.commonArrt.unshift({
                          add_time:new Date(),
                          content:this.content,
                          uesr_name:"匿名用户"
                      });
                      this.content = "";
                  }
              })
          }
      },

      runder(){
          axios({
              url:'http://www.escook.cn:3000/api/getcomments/'+this.id + "?pageindex=" + this.currentIndex
          }).then(res => {
              if(res.data.status ==0){
                  this.commonArrt = this.commonArrt.concat(res.data.message);
                  if(res.data.message.length == 0){
                      this.showMoreBtn = false;
                      Toast("没有更多数据了！！");
                  }
              }
          })
      },
      more(){
          this.currentIndex++;
          this.runder();
      }
  }

}
</script>

<style scoped>
textarea{
    margin-top: 10px;
    margin-bottom: 0px;
}
</style>


