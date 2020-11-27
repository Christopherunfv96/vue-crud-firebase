<template>
<div>
  <h1>Editar</h1>
  {{id}} - {{task}}
  <form @submit.prevent="updateTask(task)" class="form-inline">
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Nombre</div>
      </div>
      <input type="text" v-model="task.name" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary mb-2">Editar</button>
  </form>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "Edit",
  data(){
    return {
      id: this.$route.params.id
    }
  },
  methods:{
    ...mapActions(['getTask','updateTask'])
  },
  computed:{
    ...mapState(['task'])
  },
  created() {
    this.getTask(this.id)
    console.log("Entrando created from Edit in getTask")
  }
}
</script>
