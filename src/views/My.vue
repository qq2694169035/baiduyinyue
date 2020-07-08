<template>
    <div>
      <ul>
          <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
      </ul>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "My",
        created() {
            this.$store.dispatch("a",{type:2}).then(()=>{
                console.log(this.$store.state.list)
            })

        },
        computed:{
            ...mapState(['useInfor',"list"])
        }
    }
</script>

<style scoped>

</style>