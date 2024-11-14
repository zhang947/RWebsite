<template>
    <Layout>
        <div class="section">
            <div class="container" style="max-width: 1160px;">
                <div class="section--header">
                    <h2 class="section--title">RustSBI是什么</h2>
                    <p class="section--description">
                        RustSBI是完整的安全引导程序实现，适用于为固件、虚拟化软件和模拟器实现RISC-V SBI接口
                    </p>
                </div>
            </div>
        </div>

        <hr class="section_divider -narrow">

        <div class="section">
            <div class="container" style="max-width: 1160px;">
                <div class="section--header">
                    <h2 class="section--title">RustSBI可以做什么</h2>
                    <p class="section--description">
                        RustSBI 支持虚拟化相关的功能，它可以作为虚拟化软件的基础平台，提供一个可扩展的虚拟化框架，帮助开发者在 RISC-V 架构上实现高效的虚拟化。通过为虚拟机监控器（hypervisor）提供底层支持，RustSBI 可以为虚拟化环境提供安全和高性能的系统服务。
                    </p>
                    <p class="section--description">
                        RustSBI 可以用来开发 RISC-V 目标平台的启动固件。由于 Rust 的特性，RustSBI 在构建启动固件时，能够提供高效的资源管理和安全保障，避免传统 C 语言固件开发中的潜在风险和漏洞。
                    </p>
                </div>
            </div>
        </div>

        <hr class="section_divider -narrow">

        <div class="section">
            <div class="container" style="max-width: 1160px;">
                <div class="section--header">
                    <h2 class="section--title">他们都在用 RustSBI</h2>
                </div>
                
                <div class="index-container">
                    <div class="am-g">
                        <div class="am-u-md-3" v-for="(user, index) in userList" :key="index">
                            <div class="users_item">
                                <img class="users_item--logo" :src="user.cover" alt="">
                                <h3 class="users_item--title">
                                    <p>
                                        <a :href="user.text" target="_blank" style="word-break: break-all;">{{ user.title }}</a>
                                    </p>
                                </h3>
                                <!-- <div class="users_item--text">
                                    <p>
                                        <a :href="user.text" target="_blank" style="word-break: break-all;">{{ user.text }}</a>
                                    </p>
                                </div> -->
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
    name: "MainView",
    components: { Layout },
    data() {
        return {
            userList: [
                { id: 1, cover: require('../assets/images/user/01.jpg'), title: 'rCore', text: 'https://github.com/rcore-os/rCore' },
                { id: 2, cover: require('../assets/images/user/02.jpg'), title: 'dragonOS', text: 'https://github.com/DragonOS-Community/DragonOS' },
                { id: 3, cover: require('../assets/images/user/03.jpg'), title: 'oreboot', text: 'https://github.com/oreboot/oreboot' },
                { id: 4, cover: require('../assets/images/user/04.jpg'), title: 'rustyvisor', text: 'https://github.com/iankronquist/rustyvisor' },
            ]
        }
    },
}
</script>

<style scoped></style>
