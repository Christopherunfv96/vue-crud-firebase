<template>
  <div>
    <br>
    <ul class="list-group mt-5">
      <li v-for="item of tasks" :key="item.id" class="list-group-item">{{item.id}} - {{item.name}}
        <div class="float-right">
          <router-link :to="{name: 'Edit', params: {id: item.id}}" >
            <button class="btn btn-warning btn-sm mr-2">Editar</button>
          </router-link>
          <button @click="deleteTask(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </li>
    </ul>
    <button @click="forceUpdate" class="btn btn-primary my-5">forzar update</button>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
  name: "Tasks",
  methods: {
    ...mapActions(['getTasks','deleteTask']),
    forceUpdate(){
      this.$forceUpdate()
    }
  },
  computed: {
    ...mapState(['tasks'])
  },
  created() {

    this.getTasks()
    console.log("llamando created getTasks")

  },
 /* mounted() {
    this.forceUpdate()
  }*/

}
</script>

<style scoped>

</style>