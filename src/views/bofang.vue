<template>
    <div>
        <div style="position: fixed; top: 0;left: 0;right: 0;bottom: 0;background-color:#f5f5f5;z-index: -1"></div>
        <Header></Header>
        <img :src="list.pic_big" class="pic">
        <Lrc></Lrc>
        <Action :download="bitrate.file_link"></Action>
        <div class="bofang-container">
            <audio ref="audio" controls class="bofang" :src="bitrate.show_link"></audio>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Lrc from "../components/Lrc";
    import Action from "../components/Action";
    import {getSingerLrc} from "../api/music-api";
    import {mapState} from "vuex";


    export default {
        name: "bofang",
        components: {
            Header,
            Lrc,
            Action
        },
        data() {
            return {
                list: {},
                bitrate: {},
                download: ""
            }
        },
        created: function () {
            console.log(this.$route.params.songId)
            getSingerLrc(this.$route.params.songId).then(res => {
                console.log(res)
                this.list = res.songinfo;
                this.bitrate = res.bitrate
            })
        },
        mounted() {
            this.$refs.audio.addEventListener('timeupdate', () => {
                console.log(this.$refs.audio.currentTime)
                this.$store.commit("setCurrentTime", {currentTime: this.$refs.audio.currentTime})
            })
        },
        computed: {
            ...mapState
        },
        watch: {
            process() {
                this.$refs.audio.currentTime = this.process
            }
        }

    }
</script>

<style scoped lang="less">
    .pic {
        width: 150px;
        height: 150px;
        margin: 100px;
    }

    .bofang-container {
        display: flex;
        justify-content: center;
    }
</style>