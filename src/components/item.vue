<template>
	<div class="itemWrap" @click="fn()">
		<span v-show="!bol"><slot name="img1"></slot></span>
		<span v-show="bol"><slot name="img2"></slot></span>
		<!-- slot只有一个name属性，v-show来设置隐藏 外层包裹一个span -->
		<!-- <img src="../assets/img/1.png" alt=""> -->
		<p :class="{active:bol}">{{txt}}</p>
	</div>
</template>
<script>
export default{
  props: ["txt", "mark", "sel"],
	data : function () {
    return {
			// computed 进行判断来返回bol的值
		 }
	 },
	computed:{//也就可以定义变量，需要简单的逻辑判断才能得到值
		bol:function() {
			if (this.sel === this.mark) {
				return true
			}else{
				return false
			}
		}
	},
	methods:{
		fn:function () {
			this.$emit ("c", this.mark)
			this.$router.push('/'+this.mark)// 添加路由重定向实现内容的切换
		}
	}
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
.itemWrap{width: 33.3%;float:left;text-align: center;background-color: white;bottom: 0;}
.itemWrap p{color: #999; font-size: 12px;}
.itemWrap img{width: 48px;}
.itemWrap .active{color: red;}

</style>
