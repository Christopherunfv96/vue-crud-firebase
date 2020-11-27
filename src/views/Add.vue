<template>
  <div>
    <h1>Agregar</h1>
    <form @submit.prevent="addTask(name)" class="form-inline">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre</div>
        </div>
        <input type="text" v-model="name">
      </div>
      <button type="submit" class="btn btn-primary mb-2">Agregar</button>
    </form>
    {{name}}
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Add",
  methods:{
    ...mapActions(['addTask'])
  },
  data(){
    return {
      name: ''
    }
  }
}
</script>

<style scoped>

</style>