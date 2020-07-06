<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../assets/img/b1.jpg" alt="" class="Swipe-img"></van-swipe-item>
            <van-swipe-item><img src="../assets/img/b2.jpg" alt="" class="Swipe-img"></van-swipe-item>
            <van-swipe-item><img src="../assets/img/b3.jpg" alt="" class="Swipe-img"></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "Swipe"
    }
</script>

<style scoped lang="less">
    .Swipe-img {
        width: 100%;
        height: 100%;
    }
</style>