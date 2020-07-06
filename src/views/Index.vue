<template>
    <div>
        <Billlist title="今日榜单" :type="2"></Billlist>
        <Billlist title="新歌速递" :type="1"></Billlist>
        <Swipe></Swipe>
<!--        <Billlist title="音乐榜单" :type="2"></Billlist>-->
        <MusicBill></MusicBill>
        <Billlist title="热门歌单" :type="24"></Billlist>
    </div>
</template>

<script>

    import Billlist from "../components/Billlist";
    import MusicBill from "../components/MusicBill";
    import Swipe from "../components/Swipe";


    export default {
        name: "index",
        components: {
            Billlist,
            MusicBill,
            Swipe,

        }
    }
</script>

<style scoped lang="less">

</style>