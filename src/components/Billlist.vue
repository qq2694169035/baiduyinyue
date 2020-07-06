<template>
    <div class="bill-list">
        <h3>{{title}}<router-link tag="span" :to="'/index/more/'+type" class="Bill-title">更多</router-link></h3>
        <ul class="bill-list-content">
            <li v-for="i in list" :key="i.song_id">
                <img :src="i.pic_big" class="icon">
                <p class="bill-content">{{i.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from '../api/music-api'
    export default {
        name: "Billlist",
        props: {
            title: {
                type: String,
                default: "榜单"
            },
            type: {
                type: Number
            },
            size: {
                type: Number,
                default: 6
            }
        },
        data() {
        return{
            list:[]
        }
        },
        created() {

            getBillList(this.type,this.size).then(res=>{
                // debugger
                // console.log(res.list)
                this.list=res.list
            })
        }

    }
</script>

<style scoped lang="less">
    .bill-list-content {
        display: flex;
        flex-wrap: wrap;
        li {
            width: calc(100% / 3);
            box-sizing: border-box;
            padding: 5px;
            img {
                width: 100%;
            }
        }
    }

    .bill-list {
        padding: 5px 15px;
    }

    h3 {
        margin: 10px 0;
    }

    .Bill-title {
        font-size: 14px;
        color: #999;
        float: right;
    }

    .icon {
        width: 50px;
        float: left;
    }

    .bill-content {
        font-size: 12px;
    }
</style>