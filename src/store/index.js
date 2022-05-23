import Vue from 'vue';
import Vuex from 'vuex';
import Localbase from 'localbase';
Vue.use(Vuex);

let db = new Localbase('db');

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Buy milk',
        dueDate: '2022-05-22',
        description: 'Get some milk from the store',
        completed: false,
      },
      {
        id: 2,
        title: 'Buy eggs',
        dueDate: '2024-05-23',
        description: 'Get some eggs from the store',
        completed: false,
      },
      {
        id: 3,
        title: 'Buy bread',
        dueDate: null,
        description: 'Get some bread from the store',
        completed: false,
      },
    ],
    searchTerm: null,
    notification: {
      show: false,
      text: '',
      color: 'info',
    },
  },
  mutations: {
    /*
     * Search
     */
    updateSearchTerm(state, newTerm) {
      state.searchTerm = newTerm;
    },
    /*
     * Tasks
     */
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    editTaskTitle(state, { id, newTitle }) {
      const index = state.tasks.findIndex((obj) => obj.id == id);
      state.tasks[index].title = newTitle;
    },
    editTaskDate(state, { id, newDate }) {
      const index = state.tasks.findIndex((obj) => obj.id == id);
      state.tasks[index].dueDate = newDate;
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
    loadTasks({ commit }) {
      db.collection('tasks')
        .get()
        .then((tasks) => {
          commit('setTasks', tasks);
        });
    },
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(), // temp hack for id for now
        title: newTaskTitle,
        dueDate: null,
        description: '',
        completed: false,
      };
      db.collection('tasks')
        .add(newTask)
        .then(() => {
          commit('addTask', newTask);
          commit('showNotification', {
            text: 'Added fing',
            color: 'success',
          });
        });
    },
    editTaskTitle({ commit }, { id, newTitle }) {
      db.collection('tasks')
        .doc({ id: id })
        .update({
          title: newTitle,
        })
        .then(() => {
          commit('editTaskTitle', { id, newTitle });
          commit('showNotification', {
            text: "Edited fing's title",
            color: 'info',
          });
        });
    },
    editTaskDate({ commit }, { id, newDate }) {
      db.collection('tasks')
        .doc({ id: id })
        .update({
          dueDate: newDate,
        })
        .then(() => {
          commit('editTaskDate', { id, newDate });
          commit('showNotification', {
            text: "Edited fing's date",
            color: 'info',
          });
        });
    },
    deleteTask({ commit }, id) {
      db.collection('tasks')
        .doc({ id: id })
        .delete()
        .then(() => {
          commit('deleteTask', id);
          commit('showNotification', {
            text: 'Deleted fing',
            color: 'warning',
          });
        });
    },
    completeTask({ commit }, id) {
      db.collection('tasks')
        .doc({ id: id })
        .update({
          completed: true,
        })
        .then(() => {
          commit('completeTask', id);
          commit('showNotification', {
            text: 'Completed fing',
            color: 'info',
          });
        });
    },
    uncompleteTask({ commit }, id) {
      db.collection('tasks')
        .doc({ id: id })
        .update({
          completed: false,
        })
        .then(() => {
          commit('uncompleteTask', id);
          commit('showNotification', {
            text: 'Uncompleted fing',
            color: 'info',
          });
        });
    },
  },
  getters: {
    filteredTasks(state) {
      if (state.searchTerm) {
        return state.tasks.filter((task) => {
          return task.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase());
        });
      }
      return state.tasks;
    },
  },
  modules: {},
});
