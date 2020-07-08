<template>
    <div>
        <ul class="Lrc-container">
            <li v-for="item in list">{{item.lrclink}}</li>

        </ul>
    </div>
</template>

<script>
    import {getSingerLrc} from "../api/music-api";

    export default {
        name: "lrc",
        data(){
            return{
                list: {}
            }
        },
        created() {
            // console.log(this.$route.params.songId)
            getSingerLrc(this.$route.params.songId).then(res => {
                console.log(res.songinfo)
                // this.list = res.list.songinfo;
                this.list=res.songinfo

            })
        }
    }
</script>

<style scoped lang="less">
.Lrc-container {
    text-align: center;
    margin-bottom: 50px;
}
</style>