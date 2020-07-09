<template>
    <div class="Action-container">
        <van-icon v-show="!islogin" name="like-o"  @click="click1"  class="icon" />
        <van-icon v-show="islogin" name="like" @click="click1" class="icon" color="red" />
        <a href="download" download="">
            <van-icon name="down" class="icon" />
        </a>
    </div>

</template>

<script>


    import {Dialog} from "vant";
    import {Toast} from "vant";

    export default {
        name: "Action",
        data(){
          return{
              islogin:false
          }
        },
        props: {
            download:String
        },
        methods:{
            click1(){
                if (this.islogin){
                    Dialog.confirm({
                        title: '是否取消',
                        message: '是否取消',
                    })
                        .then(() => {
                            this.islogin=!this.islogin
                        })
                        .catch(() => {});
                }else{
                    this.islogin=!this.islogin
                    Toast.success('收藏成功');
                }

            }
        }

    }
</script>

<style scoped lang="less">
    .Action-container {
        display: flex;
        justify-content:space-between;
        padding: 5px;
    }
.icon {
    font-size: 30px;

}
</style>