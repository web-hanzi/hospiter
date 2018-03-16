<template lang="html">
  <div class="main">
    <mt-header title="首页"></mt-header>

    <!-- <div class="footer">
    </div> -->
    <router-view></router-view>
  </div>


</template>

<script>
  import { MidPost } from '../assets/MidPost.js'
  import all from '../../node_modules/vue-cookie/build/vue-cookie'
  export default {

    created () {
      //获取cookie
      function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1);
          if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
      }

      function get(name) {

        var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');

        return v ? v[2] : null;

      }

      var openid = getCookie('OpenId');

      var requestJson = null;
      if (openid != '') {
        requestJson ={openId:openid}
      } else
      {
        requestJson = {openId:'test'}
      }

      console.log(JSON.stringify(requestJson))

      var that = this;
      MidPost.postMidserver({success:function(data){
          console.log(data.ifNew)
          if(data.ifNew && data.ifNew == 1){
            console.log('router register')
          }else{
            that.$router.push('/Register')
          }
        },
        service:"weixin.checkUser",
        requestjson: JSON.stringify(requestJson)
      })
    }
  }
</script>

<style lang="css">



</style>
