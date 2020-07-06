<template>
    <div class="item-container">
        <div class="cover">
            <img :src="billboard.pic_s192">
        </div>
        <ul class="item-list">
            <li v-for="(item,index) in list" :key="item.song_id"><span>{{index + 1 }}</span>{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from '../api/music-api'

    export default {
        name: "BillItem",
        created() {
            console.log(this.type)
            getBillList(this.type, 3,).then(res => {
                // console.log(res)
                this.list = res.list
                this.billboard=res.billboard
            })
        },
        props: {
            type: {
                type: Number
            }
        },
        data() {
            return {
                list: [],
                billboard:{}
            }
        }

    }
</script>

<style scoped lang="less">
    .item-container {
        display: flex;


        .cover {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
            padding: 15px;

            img {
                width: 100%;
            }
        }

        .item-list {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

        }

        span {
            color: red;
        }
    }
</style>