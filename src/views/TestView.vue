<template>
    <Layout>
        <div class="section">
            <div class="headline" style="max-width: 1160px;">
                <div class="headline--header">
                    <h2 class="headline--title">{{ $t('message.whatIsTitle') }}</h2>
                    <p class="headline--description">
                        {{ $t('message.whatIsContent') }}
                    </p>
                </div>

                <div class="headline--right">
                    <a class="headline--button" href="https://docs.rs/rustsbi/latest/rustsbi">get start</a>
                </div>
            </div>
        </div>

        <hr class="section_divider -narrow">

        <div class="section">
            <div class="container" style="max-width: 1160px;">
                <div class="section--header">
                    <h2 class="section--title">{{ $t('message.whatCanDoTitle') }}</h2>
                    <div class="index-container">
                        <div class="row">
                            <div class="col1">
                                <h3 class="canDo--title">{{ $t('message.whatCanDoTitle1') }}</h3>
                                <p class="canDo--description">
                                    {{ $t('message.whatCanDoContent1') }}
                                </p>
                            </div>
                            <div class="col1">
                                <h3 class="canDo--title">{{ $t('message.whatCanDoTitle2') }}</h3>
                                <p class="canDo--description">
                                    {{ $t('message.whatCanDoContent2') }}
                                </p>
                            </div>
                            <div class="col1">
                                <h3 class="canDo--title">{{ $t('message.whatCanDoTitle3') }}</h3>
                                <p class="canDo--description">
                                    {{ $t('message.whatCanDoContent3') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr class="section_divider -narrow">

        <div class="section">
            <div class="container" style="max-width: 1160px;">
                <div class="section--header">
                    <h2 class="section--title">{{ $t('message.theyAreUsingTitle') }}</h2>
                </div>

                <div class="users-container">
                    <div class="users" v-for="(user, index) in userList" :key="index">
                        <div class="users_item">
                            <img class="users_item--logo" :src="user.cover" alt="">
                            <h3 class="users_item--title">
                                <p>
                                    <a :href="user.url" target="_blank" style="word-break: break-all;">
                                        {{ user.title }}
                                    </a>
                                </p>
                            </h3>
                            <div class="users_item--text" v-if="$i18n.locale === 'en'">
                                <p>
                                    {{ user.textEn }}
                                </p>
                            </div>
                            <div class="users_item--text" v-if="$i18n.locale === 'zh'">
                                <p>
                                    {{ user.textZh }}
                                </p>
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
                { id: 1, cover: require('../assets/images/user/01.jpg'), title: 'dragonOS', url: 'https://github.com/DragonOS-Community/DragonOS', textEn: 'dragonOS is an operating system developed from scratch using Rust, with Linux compatibility', textZh: 'dragonOS 是使用 Rust 从0自研内核，具有 Linux 兼容性的操作系统' },
                { id: 2, cover: require('../assets/images/user/02.jpg'), title: 'oreboot', url: 'https://github.com/oreboot/oreboot', textEn: 'oreboot is a downstream fork of coreboot, mostly written in Rust', textZh: 'oreboot 是 coreboot 的一个下游分支，主要用 Rust 编写' },
                { id: 3, cover: require('../assets/images/user/03.jpg'), title: 'rustyvisor', url: 'https://github.com/iankronquist/rustyvisor', textEn: 'rustyvisor is a hypervisor written in Rust', textZh: 'rustyvisor 是一个基于 Rust 的虚拟机管理程序' },
                { id: 4, cover: require('../assets/images/user/04.jpg'), title: 'rCore', url: 'https://github.com/rcore-os/rCore', textEn: 'rCore is a Rust version of THU uCore OS', textZh: 'rCore 是 Rust 版本的清华大学 uCore 操作系统' },
            ]
        }
    },
}
</script>

<style scoped>
.headline {
    display: flex;
    flex-direction: row;
}

.headline--header {
    width: 70%;
    max-width: 70rem;
    margin-right: 40px;
}

.headline--title {
    font-size: 50px;
    font-weight: 300;
    text-align: start;
}

.headline--description {
    font-size: 20px;
    line-height: 40px;
    color: #9b9b9b;
    text-align: start;
    margin: 13px auto 0;
}

.headline--right {
    width: 30%;
    padding-right: 0;
    padding-left: 50px;
}

.headline--button {
    color: black;
    font-size: 2.25rem;
    margin-top: 60px;

    display: inline-block;
    width: 100%;
    min-height: 38px;
    padding: 16px 30px;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;
    box-sizing: border-box;
    white-space: nowrap;
}

.headline--button:hover {
    background-color: #000;
    color: #fff;
}

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.col1 {
    min-width: 230px;
    flex: 1 1;
    padding: 0rem 2rem;
}

.canDo--title {
    text-align: start;
    font-size: 25px;
}

.canDo--description {
    text-align: start;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    color: #9b9b9b;
    margin: 13px auto 0;
}

.users-container {
    display: flex;
    flex-wrap: wrap;
    /* 自动换行 */
    gap: 2rem;
    /* 控制卡片之间的间距 */
    justify-content: space-between;
    /* 子项之间平均分布 */
    margin: 0 auto;
    /* 中心对齐容器 */
    margin-top: 50px;
}

.users {
    flex: 1 1 calc(25% - 2rem);
    /* 每个元素占 25% 减去间距 */
    max-width: calc(25% - 2rem);
    /* 防止宽度超出 */
    box-sizing: border-box;
    /* 包括 padding */
    padding: 0;
    /* 内边距直接定义在 .users_item */
}

.users_item {
    margin-top: 0px;
    border: 1px solid #e9e9e9;
    border-radius: 15px;
    padding: 10px 15px 0px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.users_item--logo {
    width: 150px;
    height: 150px;
}

.users_item--title {
    font-size: 20px;
    color: #262626;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 0;
    line-height: 20px;
}

.users_item--text {
    font-size: 15px;
    line-height: 23px;
    color: #969696;
    text-align: start;
    line-height: 30px;
}

</style>
