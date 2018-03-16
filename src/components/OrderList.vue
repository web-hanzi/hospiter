<template lang="html">
  <div class="OrderList">
    <mt-header title="处方详情">
        <router-link to="/" slot="left">
           <mt-button icon="back">back</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="chooseHos">
        <span>选择医院:</span>
        <select >
            <option v-for="item in hosList" v-bind:value="item.value">{{item.text}}</option>
        </select>
        <p>
            <button type="button" name="button" class="checkHos">查询</button>
        </p>
    </div>

  </div>
</template>

<script>

export default {
  data(){
    return{
            hosList:[
              {text:'A医院',value:'a'},{text:'B',value:'b'},{text:'C',value:'c'}
            ],
            input3: 'ydui@qq.com',
            input4: '',
            input5: ''
    }
  },

}
</script>

<style lang="css">
  .chooseHos p button{
    width:60px;
    text-align: center;
  }
  .chooseHos{
    width: 100%;
    height: 40px;
  }
  .chooseHos span{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: left;
  }
  .chooseHos select{
    width: 50%;
    height: 24px;
    outline: none;
    border-radius: 7px;
  }
  .checkHos{
    border: 1px solid #999;
    border-radius: 7px;
    padding: 5px;
  }





</style>
