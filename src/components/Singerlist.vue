<template>
    <div >
        <div class="singer-container1">
        <img :src="obj.avatar_big" alt="" class="singer-container">

        <span>{{obj.name}}</span>
        </div>
    </div>
</template>

<script>
    import {getSingerList} from "../api/music-api";

    export default {
        name: "Singerlist",
        props:{
            tinguid:{
                type:Number
            }
        },
        data(){
            return{
                obj:{}
            }
        },
        created() {
            getSingerList(this.tinguid).then(res=>{
                console.log(res)
                this.obj=res
            })
        }
    }
</script>

<style scoped lang="less">
.singer-container {
    float: left;
    /*border: 1px solid red;*/
    border-radius: 50%;
    width: 50px;
    height: 50px;
    img{
        border: 1px solid red;

        width: 100%;
        height: 100%;
        flex-shrink: 0;
    }
}
    .singer-container1 {
        padding: 10px;
        display: flex;
    }
    span {
        text-align: center;
       margin-left: 20px;
        margin-top: 14px;
        justify-content: space-around;
    }
</style>