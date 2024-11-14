<template>
	<Layout>
		<div class="section">
			<div class="container" style="max-width: 1160px">
				<div class="section--header">
					<h2 class="section--title">{{companyInfo.name}}</h2>
					<p class="section--description">{{companyInfo.introduction}}</p>
				</div>

				<div class="about-container">
					<div class="am-g">
						<div class="am-u-md-6">
							<div class="our-company-text">
								<h3>RustSBI的历史</h3>
								<p>
									RustSBI 项目孵化于 2020 年 rCore 团队与鹏城实验室共同举办的代码之夏活动，是在 MeowSBI 项目上修改而来的。
								</p>
								<p>
									至今，RustSBI经过多年的发展，已广泛运用于裸机固件、虚拟化软件和模拟器中。
								</p>
							</div>
						</div>

						<div class="am-u-md-6">
							<div class="our-company-quote">
								<div class="am-g">
									<div class="am-u-md-6">
										<div class="our-company-img">
											<img src="../assets/images/us/01.jpg" alt="" />
										</div>
									</div>

									<div class="am-u-md-6">
										<div class="our-company-img">
											<img src="../assets/images/us/02.jpg" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<hr class="section_divider -narrow">

		<div class="section">
			<div class="container" style="max-width: 1160px">
				<div class="section--header">
					<h2 class="section--title">团队成员</h2>
				</div>

				<div class="index-container">
					<div class="am-g">
						<div class="am-u-md-2" v-for="(partner, index) in partnersList" :key="index">
							<div class="partners_item">
								<img class="partners_item--logo" :src="partner.cover" alt="">
								<h3 class="partners_item--title">{{ partner.title }}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
export default {
	name: "AboutView",
	components: {Layout},
	data() {
		return {
			companyInfo: {},
			designers: [],
			partnersList: [
				{ id: 1, cover: require('../assets/images/partner/andelf.jpg'), title: 'andelf' },
				{ id: 2, cover: require('../assets/images/partner/duskmoon314.jpg'), title: 'duskmoon314' },
				{ id: 3, cover: require('../assets/images/partner/Gallium70.jpg'), title: 'Gallium70' },
				{ id: 4, cover: require('../assets/images/partner/gitveg.jpg'), title: 'gitveg' },
				{ id: 5, cover: require('../assets/images/partner/guttatus.jpg'), title: 'guttatus' },
				{ id: 6, cover: require('../assets/images/partner/jakezhu9.jpg'), title: 'jakezhu9' },
				{ id: 7, cover: require('../assets/images/partner/jkpathfinder.jpg'), title: 'jkpathfinder' },
				{ id: 8, cover: require('../assets/images/partner/lizhirui.jpg'), title: 'lizhirui' },
				{ id: 9, cover: require('../assets/images/partner/luojia65.jpg'), title: 'luojia65' },
				{ id: 10, cover: require('../assets/images/partner/NanaHigh.jpg'), title: 'NanaHigh' },
				{ id: 11, cover: require('../assets/images/partner/orangecms.jpg'), title: 'orangecms' },
				{ id: 12, cover: require('../assets/images/partner/Placebo27.jpg'), title: 'Placebo27' },
				{ id: 13, cover: require('../assets/images/partner/tfx2001.jpg'), title: 'tfx2001' },
				{ id: 14, cover: require('../assets/images/partner/tkf2019.jpg'), title: 'tkf2019' },
				{ id: 15, cover: require('../assets/images/partner/wangrunji0408.jpg'), title: 'wangrunji0408' },
				{ id: 16, cover: require('../assets/images/partner/woshiluo.jpg'), title: 'woshiluo' },
				{ id: 17, cover: require('../assets/images/partner/wyfcyx.jpg'), title: 'wyfcyx' },
				{ id: 18, cover: require('../assets/images/partner/wyywwi.jpg'), title: 'wyywwi' },
				{ id: 19, cover: require('../assets/images/partner/YdrMaster.jpg'), title: 'YdrMaster' },
				{ id: 20, cover: require('../assets/images/partner/zhang947.jpg'), title: 'zhang947' },
			]
		}
	},
}
</script>

<style scoped>

</style>
