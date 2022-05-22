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
      show: false,
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
    },
    editTaskTitle(state, { id, newTitle }) {
      console.log('editTaskTitle', id, newTitle);
      const index = state.tasks.findIndex((obj) => obj.id == id);
      console.log(' before: state.tasks[index]', state.tasks[index]);
      state.tasks[index].title = newTitle;
      console.log('after : state.tasks[index]', state.tasks[index]);
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
    showNotification(state, { text, color }) {
      let timeout = 0;
      if (state.notification.show) {
        state.notification.show = false;
        timeout = 400;
      }
      setTimeout(() => {
        state.notification.text = text;
        state.notification.color = color;
        state.notification.show = true;
      }, timeout);
    },
    hideNotification(state) {
      state.notification.show = false;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('showNotification', {
        text: 'Added fing',
        color: 'success',
      });
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
      commit('showNotification', {
        text: 'Deleted fing',
        color: 'warning',
      });
    },
    completeTask({ commit }, id) {
      commit('completeTask', id);
      commit('showNotification', {
        text: 'Completed fing',
        color: 'info',
      });
    },
    uncompleteTask({ commit }, id) {
      commit('uncompleteTask', id);
      commit('showNotification', {
        text: 'Uncompleted fing',
        color: 'info',
      });
    },
  },
  modules: {},
});
