<template>
  <div>
    <h1>REGISTRATION</h1>
    <div >
      <label>NAME : </label>
      <input type="text" v-model="name"/>
      <label>EMAIL : </label>
      <input type="text" v-model="email"/>
      <label>ID : </label>
      <input type="text" v-model="id"/>
      <button @click="sendData">SUBMIT</button>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
data() {
  return {
    id:'',
    name:'',
    email:'',
  };
},
// async mounted() {
//   const response = await this.$axios.get('/select');
//   this.id = response.data;
// },

methods: {
  async sendData () {
    console.log(this.name,this.email,this.id);
        await this.$axios.post('/insert', {
          id: this.id ,
          name: this.name, 
          email: this.email})
      }
}
});
</script>
