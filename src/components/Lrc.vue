<template>
    <div class="Lrc-list">
        <ul class="Lrc-container" ref="list">
            <li @click="click(item.time)" v-for="(item,index) in lrcContent" :key="item.song_id"
                :style="{color:index==active?'red':'black'}">
                {{item.content}}
            </li>

        </ul>
    </div>
</template>

<script>
    import {getLrc, getSingerLrc} from "../api/music-api";
    import {mapState} from "vuex";

    export default {
        name: "lrc",
        data() {
            return {
                lrcContent: [],
                active: 0
                // 当前激活的歌词

            }
        },
        created() {
            getSingerLrc(this.$route.params.songId).then(res => {
                console.log(res.songinfo.lrclink)
                getLrc(res.songinfo.lrclink).then(res => {
                    const lrcContent = res.content.replace(/\r/g, '').split("\n");
                    let reg = /\[\d*:\d*\.\d*\]/g;
                    if (!res.content.match(reg)) {
                        this.lrcContent = lrcContent.map(item => {
                            return {
                                time: -1,
                                content: item,
                                scroll: false,
                                timer: null
                            }
                        })
                    }

                    lrcContent.forEach(item => {
                        let content = item.match(reg);
                        if (content) {
                            content.forEach(timeItem => {
                                let min = Number(timeItem.match(/\[\d*/)[0].replace("[", ""));
                                let sec = Number(timeItem.match(/:\d*/)[0].replace(":", ""));

                                let time = min * 60 + sec;
                                let contentStr = item.replace(reg, "");
                                if (contentStr) {
                                    this.lrcContent.push({
                                        time,
                                        content: contentStr
                                    })
                                }
                            })
                        }
                    })
                })


            })
        },
        computed: {
            ...mapState(['currentTime'])
        },
        watch: {
            currentTime() {
                for (var i = 0; i < this.lrcContent.length; i++) {
                    if (this.lrcContent[i].time > this.currentTime) {
                        this.active = i - 1;
                        //滚动
                        if (!this.scroll) {
                            this.$refs.list.scrollTop = this.$refs.list.children[this.active].offsetTop - 50;
                        }
                        break;
                    }
                }
            }
        },
        methods: {
            click(time) {
                this.$store.commit("setProcess", {process: time})
            }
        },
        mounted() {
            this.$refs.list.addEventListener('touchstart', () => {

                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.scroll = true;
            });
            this.$refs.list.addEventListener('touchend', () => {
                this.timer = setTimeout(() => {
                    this.scroll = false
                }, 2000)
            })
        }
    }
</script>

<style scoped lang="less">
    .Lrc-container {
        text-align: center;

        height: 100%;
        overflow: scroll;
        position: relative;

    }

    .Lrc-list {
        height: 100px;
        margin-bottom: 50px;
    }

</style>