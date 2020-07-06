<template>
    <div>
        <ul class="music-list">
            <li v-for="i in list" :key="i.song_id">
                <div class="cover">
                    <img :src="i.pic_big" alt="">
                </div>
                <div class="intro">
                    <div class="title1">{{i.title}}</div>
                    <div class="title2">{{i.artist_name}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from '../api/music-api'
    export default {
        name: "Musiclist",
        props:{
            type:{
                type:Number
            }
        },
        data(){
            return{
                list:[]
            }
        },
        created() {
            getBillList(this.type,4).then(res=>{
                // console.log(res.list)
                this.list=res.list
            })
        }
    }
</script>

<style scoped lang="less">
    .music-list {
        margin-top: 10px;

    li {
        display: flex;

    .cover {
        width: 50px;
        flex-shrink: 0;
        padding: 5px;

    img {
        width: 100%;
    }

    .intro {
        flex-grow: 1;
        padding: 3px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    }
    }
    }
</style>