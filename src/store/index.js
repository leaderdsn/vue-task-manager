import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(sessionStorage.getItem('tasks')) || [],
  }),
  getters: {
    getTasks: state => state.tasks,
    getTasksCompleted: state =>
      state.tasks.filter(item => item.completed === true),
    getTasksNotCompleted: state =>
      state.tasks.filter(item => item.completed === false),
  },
  actions: {
    setTasks(data) {
      this.tasks = data
      sessionStorage.setItem('tasks', JSON.stringify(data))
    },
    removeTasks() {
      this.tasks = []
      sessionStorage.removeItem('tasks')
    },
  },
})
