import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Buy milk',
        description: 'Get some milk from the store',
        completed: false,
      },
      {
        id: 2,
        title: 'Buy eggs',
        description: 'Get some eggs from the store',
        completed: false,
      },
      {
        id: 3,
        title: 'Buy bread',
        description: 'Get some bread from the store',
        completed: false,
      },
    ],
  },
  mutations: {
    addTask(state, newTaskTitle) {
      state.tasks.push({
        id: state.tasks.length + 1, // temp hack for id for now
        title: newTaskTitle,
        description: '',
        completed: false,
      });
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  modules: {},
});
