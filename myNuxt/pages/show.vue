<template>
  <div class="px-20 my-20">
    <div class="space-y-5">
    <div v-for="item in items" :key="item.Id" class="flex justify-between gap-6 rounded-lg bg-white shadow-md p-5 ">
        <div class="flex gap-x-4">
        <p >Name: {{item.Name}}</p>
        <p>Id : {{item.Id}}</p>
        <p>Email : {{item.Email}}</p>

        </div>
        
        <div>
          <NuxtLink :to="`/pages/${item.Id}`">EDIT</NuxtLink>
          <button class="ml-5">Delete</button>
        </div>

        
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  async mounted(){
    let response = await this.$axios.get('/view');
    console.log("Response",response);
    this.items = response.data;
  },
  
  methods:{
    async deleteItem(itemId) {
      try {
        await this.$axios.delete(`/items/${itemId}`);
        await this.fetchData(); 
      } catch (error) {
        console.error(error);
      }
    },
}
};
</script> 