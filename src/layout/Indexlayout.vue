<template>
    <div>
    <ul class="nav1">
        <li>
            <router-link to="/index"><img src="../assets/logo-ea5.png"></router-link>
        </li>
        <li>
            <router-link to="/index/singer">歌手</router-link>
        </li>
        <li>
            <router-link to="/index/bill">榜单</router-link>
        </li>
        <li>
            <router-link to="/index/my">我的</router-link>
        </li>
        <li>
            <router-link to="/index/search">搜索</router-link>
        </li>
    </ul>
    <section>
        <router-view></router-view>
    </section>
    </div>
</template>

<script>
    export default {
        name: "Indexlayout",
        watch:{
            $route(){
                document.title=this.$route.meta.title
            }
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .nav1{
        display: flex;
        background-color: #f9f9f9;
        color: #999;
        height: 50px;
        font-size: 16px;
        justify-content: space-around;
        align-items: center;

    li {
        width: 20%;
        text-align: center;
        float: left;
    }
    img{
        /*width: 100%;*/
        height: 27px;
    }
    a{
        color: #999;
    }

    }
</style>