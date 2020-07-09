<template>
    <div>

        <input type="text" v-model="content"><button @click="search">搜索</button>

        <van-tabs v-model="active">
            <van-tab v-for="(item,index) in list" :key="index" :title="item.artistname"><Searchlist :id="item.artistname"></Searchlist></van-tab>

        </van-tabs>

    </div>
</template>

<script>

    import {getsearch} from "../api/music-api";
    import Searchlist from "../components/Searchlist";

    export default {
        components:{
            Searchlist
        },
        name: "search",
        data(){
            return{
                content:"",
                active: 2,
                list:[]
            }
        },

        computed:{

        },
        methods:{
            search(){
                // console.log(this.content)
                getsearch(this.content).then(res=>{
                    // console.log(res)
                    this.list=res.artist
                })
            }
        }
    }
</script>

<style scoped>

</style>