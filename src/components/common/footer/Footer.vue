<template>
	<div class="footer">
		<div style="background-color:#383d61" class="footer--bg"></div>
		<div class="footer--inner">
			<div class="am-g">
				<div class="am-u-md-6 ">
					<div class="footer_main--column">
						<strong class="footer_main--column_title">{{ $t('message.downloadLink') }}</strong>
						<div class="footer_about">
							<p class="footer_about--text">
								{{ $t('message.refer') }} <a href="https://github.com/rustsbi/prototyper" target="_blank">https://github.com/rustsbi/prototyper</a>
							</p>
						</div>
						<strong class="footer_main--column_title">{{ $t('message.basicInfo') }}</strong>
						<div class="footer_about">
							<p class="footer_about--text">
								{{ $t('message.refer') }} <a href="https://docs.rs/rustsbi/latest/rustsbi" target="_blank">https://docs.rs/rustsbi/latest/rustsbi</a> 
							</p>
						</div>
					</div>
				</div>
				<div class="am-u-md-6 ">
					<div class="footer_main--column">
						<strong class="footer_main--column_title">{{ $t('message.contactDetails') }}</strong>
						<ul class="footer_contact_info">
							<li class="footer_contact_info--item"><i
									class="am-icon-mail-forward"></i><span>{{ $t('message.contactEmail') }}</span></li>
							<li class="footer_contact_info--item"><i
									class="am-icon-map-marker"></i><span>{{ $t('message.contactAddress') }}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped>

</style>
