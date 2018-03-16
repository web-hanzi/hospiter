<template>
  <div>
    <p class="header">
    LocalStore
    </p>
  <div class="formlist">
    <form action="">
      <p><span class="lefttip"><label>姓名：</label></span><span><input type="text" placeholder="请输入姓名" v-model="showName" class="formlist-inp"></span></p>
      <span class="g-form-error">{{ userErrors.errorText }}</span>
      <p><span class="lefttip"><label>身份证号：</label></span><span><input type="text" placeholder="请输入身份证号码" v-model="sfId" class="formlist-inp"></span></p>
      <span class="g-form-error">{{ sfIdErrors.errorText }}</span>
      <p class="tel">
        <span class="lefttip"><label>手机号：</label></span>
        <span ><input type="text" placeholder="请输入手机号码" v-model="Tel" class="formlist-inp"></span>
        <span><input
        type="button" value="发送" class="fasong"></span></p>
      <span class="g-form-error">{{ TelErrors.errorText }}</span>
      <p><span class="lefttip"><label>验证码：</label></span><span><input type="text" placeholder="请输入验证码" class="formlist-inp"></span></p>
      <div class="btn_regist"><input type="button" class="reg" value="注册" @click="fn"></div>
      <span class="g-form-error">{{errorText }}</span>
    </form>
  </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import { MidPost } from '../assets/MidPost.js'
  export default {
    name:'reg',
    data () {
      return {
        showName:'',
        sfId:'',
        Tel:'',
        errorText:'',
      }
    },
    computed: {
      userErrors () {
        let errorText, status
        if(this.showName === '') {
          status = false
          errorText = ''
        } else if (!/^[\u4e00-\u9fa5]{0,}$/g.test(this.showName)) {
          status = false
          errorText = '姓名必须为汉字'
        }
        else{
          status = true;
          errorText = ''
        }
        return{
          errorText,
          status
        }
      },
      sfIdErrors () {
        let errorText, status
        if(this.sfId === '') {
          status = false
          errorText = ''
        }else if(!/^\d{15}|\d{18}$/g.test(this.sfId)){
          status = false
          errorText = '请正确输入身份证号码'
        } else {
          status = true
          errorText = ''
        }
        return{
          errorText,
          status
        }
      },
      TelErrors () {
        let errorText ,
          status
        if(this.Tel === ''){
          status = false
          errorText = ''
        }else if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g.test(this.Tel)){
          status = false
          errorText = '请正确输入手机号码'
        }else{
          status = true
          errorText = ''
        }
        return{
          errorText,
          status
        }
      }
    },

    //获取
    created () {
      var that = this
      MidPost.postMidserver({success: function (data) {
          console.log(data.ifNew)
          if (data.ifNew && data.ifNew === 0) {
          } else {
            that.$router.push('/Register')
          }
        },
        service:"weixin.checkUser",
        requestjson: "{'openId':'23423421312'}"
      })
    },

    methods: {
      fn () {
        if (!this.userErrors.status || !this.sfIdErrors.status || !this.TelErrors.status) {
          this.errorText = '请正确输入要填写的内容!!!'
        }
        else {
          this.errorText = ''

          let instance = Toast('注册成功')
          setTimeout(() => {
            instance.close()
          }, 1000)
          this.$router.push('/OrderInfo')
        }
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
.header{
  width: 100%;
  height: 45px;
  font-size: 16px;
  line-height: 45px;
  background-color: black;
  color: white;
  text-align: center;
}
  .formlist{
    margin-top: 40px;
  }
  .formlist p{
    margin-left: -13px;
    width: 100%;
    margin-top: 8px;
  }
  input{
    outline: none;
  }
  .formlist-inp{
     display: inline-block;
     height: 30px;
     width: 50%;
     border-radius: 5px;
     border: 1px solid black;
     text-indent: 1em;
   }
  .lefttip{
    display: inline-block;
    width: 22%;
    text-align: right;
    font-size: 14px;
  }
  .tel{
    position: relative;
  }
  .tel .fasong{
    position: absolute;
    top: 3px;
    border: 1px solid #999;
    padding: 4px;
    border-radius: 5px;
    margin-left: 5px;
  }
  .fasong{
    display: inline-block;
    width: 10%;
  }
  .reg{
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #26a2ff;
    color: white;
    border: none;
    border-radius: 7px;
  }
  .g-form-error{
    padding-left: 30px;
    color: red;
    font-size: 10px;
  }
  btn{
    background-color: aqua;
  }
</style>
