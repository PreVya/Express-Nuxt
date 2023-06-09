<template>
    <div>
      <h1 @click="fetchData">REGISTRATION</h1>
      <div class="space-y-0.5">
         <div class="inline-flex p-5 space-x-5">
      <p>Name </p>
      <p>Email </p>
      <p>ID </p>
    </div >
      <div v-for="items in dataList" :key="items.Id" ><br>
        <div class="inline-flex p-2 ">
      <p> {{items.name}} </p>
      <p> {{items.Email}} </p>
      <p> {{items.Id}} </p>
    </div>
    </div>
    </div>
    </div> 
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        dataList: [] as string[], // Initialize id as null or any default value you prefer
      };
    },
    mounted() {
      this.fetchData
    },
    methods:{
        fetchData: async ()=>{
            const response = await this.$axios.get('/view');
            this.dataList = response.data;
        },
    }
}); 
  </script>
  
  
  
  
  
  
  // onMounted( async ()=> {
  //   const response = await $axios.get('/view');
  
  //   let id =response.data;
  // })
  