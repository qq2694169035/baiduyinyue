<template>
    <div class="header-container">
        <router-link to="/index"><van-icon name="wap-home-o" class="icon" color="red"/></router-link>
        <span class="content">{{list.title}}</span>
        <router-link to="/index/search"><van-icon name="search" class="icon"/></router-link>
    </div>
</template>

<script>

    import {getSingerLrc} from "../api/music-api";

    export default {
        name: "Header",
        data() {
            return {
                list: {}
            }
        },
        created() {
            // console.log(this.$route.params.songId)
            getSingerLrc(this.$route.params.songId).then(res => {
                // console.log(res.list.songinfo)
                this.list = res.list.songinfo;
            })
        }
    }
</script>
<style scoped lang="less">
    .icon {
        font-size: 30px;
    }

    .header-container {
        padding: 5px;
        display: flex;
        justify-content: space-between;
    }

    .content {
        font-size: 18px;
    }
</style>