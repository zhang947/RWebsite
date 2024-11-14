<template>
	<div class="header-wrapper" >		
		<div class="nav-wrapper header-default">
			<div class="nav">
				<ul class="am-nav am-nav-pills am-nav-justify">
					<li><router-link class="router" to="/main">基本信息</router-link></li>
					<li><router-link class="router" to="/about">关于我们</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import AppFunctions from "@/utils/AppFunctions";
export default {
	name: "Header",
	components: {},
	data(){
		return{
			AppFunctions,
			
		}
	},
	methods: {
		toggleStickyHeader() {
			const scrolled = document.documentElement.scrollTop;
			if (scrolled > 50) {
				AppFunctions.addClass('.header-default', 'sticky');
			} else if (scrolled <= 50) {
				AppFunctions.removeClass('.header-default', 'sticky');
			}
		},
	},
	created() {
		window.addEventListener('scroll', this.toggleStickyHeader);
	},
	mounted() {
		this.toggleStickyHeader();
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.toggleStickyHeader);
	}
	
}
</script>

<style scoped>
.router.router-link-active{
	cursor: default;
	color: #0e90d2;
}

</style>
