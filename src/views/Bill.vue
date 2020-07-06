<template>
    <div>

        <BillItem v-for="item in list" :key="item" :type="item"></BillItem>
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

<style scoped>

</style>