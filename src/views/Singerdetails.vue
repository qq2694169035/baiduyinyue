<template>
    <div>
        <div style="position: fixed; top: 0;left: 0;right: 0;bottom: 0;background-color:#f5f5f5;z-index: -1"></div>
        <div class="singer-conpainer">
            <img :src="pic.avatar_s180" alt="">
        </div>

        <ul>
            <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import {getSinger} from "../api/music-api";

    export default {
        name: "Singerdetails",
        data(){
            return{
                list:[],
                pic:{}
            }
        },
        // props:{
        //     tinguid1:[]
        // },
        created() {
            console.log(this.$route.params.tingup);
            getSinger(this.$route.params.tingup).then(res=>{
                // console.log(res)
                console.log(res.artistinfo)
                this.list=res.songlist
                this.pic=res.artistinfo

            })
        }
    }
</script>

<style scoped lang="less">
    .singer-conpainer{
      display: flex;
        justify-content: center;
        margin-top: 50px;
    }
img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
ul {
    padding: 10px;
}
    li {
        margin-top: 10px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid black;
    }
</style>