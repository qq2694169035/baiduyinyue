<template>
    <div>
        <router-link :to="'/index/Singerdetails/'+item" v-for="item in tinguid" :key="item"  >
            <Singerlist :tinguid="item"></Singerlist>
        </router-link>
    </div>
</template>

<script>

    import Singerlist from "../components/Singerlist";

    export default {
        name: "Singer",
        components: {
            Singerlist
        },
        data(){
            return{
                tinguid:[2517,7994,1091,45561,2507,245815,1077,82366,1117]
            }
        }
    }
</script>

<style scoped>

</style>