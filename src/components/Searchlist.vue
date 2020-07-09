<template>
    <div class="list-c">
      <ul>
          <li v-for="(item,index) in list" :key="index">
              <img :src="item.artistpic" alt="">
              <p>{{item.albumname}}</p>
          </li>
      </ul>
    </div>
</template>

<script>
    import {getsearch} from "../api/music-api";

    export default {
        name: "Searchlist",
        props:{
            id:String
        },
        data(){
          return{
              list:String
          }
        },
        created() {
            getsearch(this.id).then(res=>{
                console.log(res)
                this.list=res.list.album
            })
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
    .list-c{
        width: 100px;
        height: 100px;
    }
img {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    /*margin-top: 50px;*/
    /*float: left;*/
}
    p{
        /*float: left;*/

    }
li{
    display: flex;
    width: 1000px;

}
    li{
        padding: 15px;
    }
</style>