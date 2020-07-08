<template>
    <div>
        <div></div>
     <Header></Header>
        <img :src="list.pic_big" class="pic">
        <Lrc></Lrc>
        <Action></Action>
        <div class="bofang-container">
        <audio controls class="bofang" :src="bitrate.file_link"> </audio>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Lrc from "../components/Lrc";
    import Action from "../components/Action";
    import {getSingerLrc} from "../api/music-api";

    export default {
        name: "bofang",
        components:{
            Header,
            Lrc,
            Action
        },
        data(){
            return{
                list:{},
                bitrate:{}
            }
        },
        created: function () {
            console.log(this.$route.params.songId)
            getSingerLrc(this.$route.params.songId).then(res => {
                console.log(res)
                this.list = res.songinfo;
                this.bitrate=res.bitrate
            })
        }
    }
</script>

<style scoped lang="less">
.pic{
    width: 150px;
    height: 150px;
    margin: 100px;
}
    .bofang-container {
        display: flex;
        justify-content: center;
    }
</style>