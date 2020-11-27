<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png">-->
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1 class="text-muted text-center my-3">Lista de Tareas</h1>
    <router-link :to="{name: 'Add'}">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <tasks></tasks>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'


import Tasks from "@/components/Tasks";

export default {
  name: 'Home',
  components: {
    /*HelloWorld*/
    Tasks
  },

}
</script>
