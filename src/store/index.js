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
    notification: {
      show: true,
      text: '',
    },
  },
  mutations: {
    /*
     * Tasks
     */
    addTask(state, newTaskTitle) {
      state.tasks.push({
        id: state.tasks.length + 1, // temp hack for id for now
        title: newTaskTitle,
        description: '',
        completed: false,
      });
      state.notification.show = true;
      state.notification.text = `Added new fing: ${newTaskTitle}`;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    completeTask(state, id) {
      const index = state.tasks.findIndex((obj) => obj.id == id);
      state.tasks[index].completed = true;
    },
    uncompleteTask(state, id) {
      const index = state.tasks.findIndex((obj) => obj.id == id);
      state.tasks[index].completed = false;
    },
    /*
     * Notifications
     */
    setNotification(state, notification) {
      state.notification.text = notification.text;
    },
    showNotification(state) {
      state.notification.text = true;
    },
    hideNotification(state) {
      state.notification.show = false;
    },
  },
  actions: {},
  modules: {},
});
