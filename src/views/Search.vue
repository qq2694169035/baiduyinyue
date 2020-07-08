<template>
    <div>
<!--        {{useInfor.name}}-->
        {{a.name}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "search",
        created() {

        },
        computed:{
            // ...mapState(['useInfor'])
            ...mapState({a:"useInfor"})
        }
    }
</script>

<style scoped>

</style>