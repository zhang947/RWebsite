<template>
	<div class="header-wrapper">
		<div class="nav-wrapper header-default">
			<div class="nav">
				<!-- <a class="nav-logo">RustSBI</a> -->
				<img class="nav-logo" src="../../../assets/logo.png" alt="">
				<ul class="am-nav am-nav-pills am-nav-justify">
					<li><router-link class="router" to="/main">{{ $t('message.basicInfo') }}</router-link></li>
					<li><router-link class="router" to="/about">{{ $t('message.aboutUs') }}</router-link></li>
					<li><a class="language-item" @click="changeLanguage('en')">English</a></li>
					<li><a class="language-item" @click="changeLanguage('zh')">中文</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
	components: {},
	methods: {
		changeLanguage(lang) {
			this.$i18n.locale = lang;
			localStorage.setItem('lang', lang);
		}
	}
}
</script>

<style scoped>
.router.router-link-active{
	cursor: default;
	color: #0e90d2;
}

.nav-logo{
	width: 75px;
	font-size: 30px;
	font-weight: 700;
	line-height: 30px;
}

.language-item{
	cursor: pointer;
}
</style>
