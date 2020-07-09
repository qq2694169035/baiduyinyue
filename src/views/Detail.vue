<template>
    <div>
        <div class="details-pic">
        <img :src="billboard.pic_s260" alt="">
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="index" class="li1">
                {{item.title}}
                <p>{{item.author}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from "../api/music-api";

    export default {
        name: "detail",
        data(){
          return{
              list:[],
              billboard:{}
          }
        },
        created() {
            getBillList(this.$route.params.type).then(res=>{
                console.log(res)
                this.list=res.list
                this.billboard=res.billboard
            })

        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
.details-pic {
    width: 100%;
    height: 300px;
    /*padding: 20px;*/
    /*margin:50px auto;*/

    img{
        width: 100%;
        height: 100%;
    }
}
ul{
    padding: 15px;
}
    li {
        height: 70px;
        /*line-height: 20px;*/
        margin-top: 20px;
    }
    .li1 {
        font-size: 18px;
        border-bottom: 1px solid #ccc;
        p{
            font-size: 14px;
            color: #ccc;
            margin-top: 10px;
        }
    }
</style>