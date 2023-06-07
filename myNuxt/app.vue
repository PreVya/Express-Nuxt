<template>
  <div>
    <h1>REGISTRATION</h1>
    <form method="POST">
      <label>ID :</label>
      <input type="text" id="id " required/><br>
      <label>Name :</label>
      <input type="text" id="name " required/><br>
      <label>Email:</label>
      <input type="text" id="email" required/><br>
      <button type="submit" value="submit">SUBMIT</button>
    </form>
  </div>
</template>
<script setup lang="ts">
const { $axios } = useNuxtApp()

onMounted( async ()=>{
  const response = await $axios.get('/insert');
  console.log('data',response.data)
})
</script>