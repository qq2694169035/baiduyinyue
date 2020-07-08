<template>
    <div>
        <h2>{{title}}</h2>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    class="van-list"
            >
                <div v-for="(item,index) in list" :key="index" class="box">
                    <img :src="item.pic_big">
                    <div>{{item.title}}</div>
                </div>
            </van-list>
        </van-pull-refresh>

    </div>
</template>

<script>
    import {getBillList} from '../api/music-api'

    export default {

        name: "Moremusic",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                offset: 0,
                title:''
            };
        },
        created() {
            this.title=this.$route.params.title
        },

        methods: {
            onLoad() {

                this.offset += 10;
                getBillList(this.$route.params.type, 10, this.offset).then(res => {
                    console.log(res.list)
                    // this.list=res.list
                    this.list = this.list.concat(res.list), this.refreshing = false
                    this.loading = false
                })

            },
            onRefresh() {
                // 清空列表数据
                this.list = [],
                    this.offset = 0,
                    this.onLoad()
            },
        },
    }
</script>

<style scoped lang="less">
    .van-list {
        display: flex;
        flex-flow: wrap;
    }

    .box {
        display: flex;
        flex-direction: column;
        width: calc(100% / 2);
        box-sizing: border-box;
        padding: 5px;

        img {
            width: 100%;
        }
    }
</style>