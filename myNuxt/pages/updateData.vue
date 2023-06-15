<template>
    <div>
      <h1>UPDATE YOUR DATA</h1>
      <div >
        <p><label>NAME : </label>
        <input type="text" v-model="name"/></p>
        <p><label>EMAIL : </label>
        <input type="text" v-model="email"/></p>
        <label>ID : {{$route.params.id}}</label>
        <br>
        <button @click="sendData">SUBMIT</button>
      </div>
      </div>
  </template>
  <script lang="ts">
  
  export default defineComponent({
  data() {
    return {
      id: null as unknown as string | string[],
      name:'',
      email:'', 
    };
  },
  // async mounted() {
  //   const response = await this.$axios.get('/select');
  //   this.id = response.data;
  // },
  async mounted(){
    this.id = this.$route.params.id;
  },
  methods: {
    async sendData () {
      console.log(this.name,this.email,this.id);
          await this.$axios.post('/update', {
            id: this.id ,
            name: this.name, 
            email: this.email})
        }
  }
  });
  </script>
  