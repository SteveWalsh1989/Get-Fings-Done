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
      color: 'info',
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
      this.commit('showNotification', {
        text: `Added fing: ${newTaskTitle}`,
        color: 'success',
      });
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex((obj) => obj.id == id);
      this.commit('showNotification', {
        text: `Deleted: ${state.tasks[index].title}`,
        color: 'warning',
      });
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    completeTask(state, id) {
      const index = state.tasks.findIndex((obj) => obj.id == id);
      state.tasks[index].completed = true;
      this.commit('showNotification', {
        text: `Completed: ${state.tasks[index].title}`,
        color: 'info',
      });
    },
    uncompleteTask(state, id) {
      const index = state.tasks.findIndex((obj) => obj.id == id);
      state.tasks[index].completed = false;
      this.commit('showNotification', {
        text: `Unompleted: ${state.tasks[index].title}`,
        color: 'info',
      });
    },
    /*
     * Notifications
     */
    showNotification(state, { text, color }) {
      console.log(' showNotification text: ', text);
      console.log(' showNotification color: ', color);

      state.notification.text = text;
      state.notification.color = color;
      state.notification.show = true;
    },
    hideNotification(state) {
      state.notification.show = false;
    },
  },
  actions: {},
  modules: {},
});
