<template>
    <div class="Action-container">
        <van-icon name="like-o"  class="icon"/>
        <van-icon name="down" class="icon" />
    </div>

</template>

<script>


    export default {
        name: "Action",

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