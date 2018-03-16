<template>
	<div class="tabbarWrap">
	  <!--确定隐藏/显示设定一个mark值-->
    <!--<Item txt="用户管理" mark="OrderInfo" :sel="selected" @c="getVal">-->
      <!--<img src="../assets/imgs/7.png" alt="" slot="img1">-->
      <!--<img src="../assets/imgs/2.png" alt="" slot="img2">-->
    <!--</Item>-->
    <!--<Item txt="医院列表" mark="OrderList" :sel="selected" @c="getVal">-->
      <!--<img src="../assets/imgs/8.png" alt="" slot="img1">-->
      <!--<img src="../assets/imgs/3.png" alt="" slot="img2">-->
    <!--</Item>-->
	</div>
</template>

<script>
import Item from '../components/item.vue'
export default{
	components : {
		Item
	},
	data:function(){
		return {
			selected:"Register"
		}
	},
	methods:{
		getVal:function(val){
			//val就是子组件点击传过来的值
			this.selected = val
		}
  }
}
</script>
<style>
  .tabbarWrap{width: 100%;position: fixed;bottom: 0;border-top: 1px solid #ccc;}
</style>
