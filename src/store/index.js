import { createStore } from 'vuex'
import db from '../firebase'
import router from '../router'

export default createStore({
  state: {
    tasks: [],
    task: {
      id: '',
      name: ''
    }
  },
  mutations: {
    setTasks(state , tasks){
      state.tasks = tasks
    },
    setTask(state, task){
      state.task = task
    },
    removeTask(state, id){
      state.tasks = state.tasks.filter(task =>{
        return task.id !== id
      })
    }
  },
  actions: {
    getTasks({commit}){
      const tasks = []
      db.collection('tasks').get().then(snapshot =>{
        snapshot.forEach(document => {
          /*console.log(document.data());*/
          let task = document.data()
              task.id = document.id
              tasks.push(task)
        })
      })
      commit('setTasks', tasks)
    },
    getTask({commit}, id){
      db.collection('tasks').doc(id).get().then(document => {
        //console.log(document.data())
        let task = document.data()
            task.id = document.id
            commit('setTask', task)
      })
    },
    updateTask({commit},task){
      db.collection('tasks').doc(task.id).update({
        name: task.name
      }).then(() =>{
        router.push({name: 'Home'})
      })
    },
    addTask({commit}, name){
      // Add a new document with a generated id.
      db.collection("tasks").add({
        name: name,
      }).then( document => {
            router.push({name: 'Home'})
            console.log("Document written with ID: ", document.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
    },
    deleteTask({commit, dispatch}, id){
      db.collection('tasks').doc(id).delete().then(() => {
        console.log("La tarea fue eliminada")
        /*dispatch('getTasks')*/
        commit('removeTask',id)
      })
    }
  },

})
