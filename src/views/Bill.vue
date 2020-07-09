<template>
    <div>
      <router-link :to="'/details/'+item" v-for="item in list" :key="item">  <BillItem  :type="item"></BillItem></router-link>
       </div>
</template>

<script>
    import BillItem from "../components/BillItem";

    export default {
        name: "Bill",
        components: {BillItem},
        data(){
          return{
              list:[1,2,22,23,24]
          }
        },

    }
</script>

<style scoped lang="less">
a{
    color: black;
}
</style>