<template>
    <div class="bill-list">
<!--        <h3>-->
<!--            {{title}}-->
<!--            <router-link :to="'/index/more/'+type" tag="span" class="Bill-title"> 更多</router-link>-->

<!--            </h3>-->
        <h3>音乐榜单<router-link tag="span" :to="'/index/more/'+type" class="Bill-title">更多</router-link></h3>
        <van-tabs v-model="active">
            <van-tab title="热歌榜" >
                <Musiclist :type="2"></Musiclist>
            </van-tab>
            <van-tab title="新歌榜" >
                <Musiclist :type="1"></Musiclist>
            </van-tab>
            <van-tab title="king榜" >
                <Musiclist :type="24"></Musiclist>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {getBillList} from '../api/music-api'
    import Musiclist from "./Musiclist";
    export default {
        name: "MusicBill",
        components:{
            Musiclist
        },
        data() {
            return {
                active: 0,
                type: 0,
                list:[]
            };
        },
        created() {
            getBillList(this.type,5).then(res=>{
                // console.log(res)
                this.list=res.list
            });

        },

    }
</script>

<style scoped lang="less">


    h3 {
        margin: 10px 0;
    }

    .Bill-title {
        font-size: 14px;
        color: #999;
        float: right;
    }

    .bill-list {
        padding: 5px 15px;
    }


</style>