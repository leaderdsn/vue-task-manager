<template>
  <div class="app-tasks">
    <form class="app-tasks__form">
      <label class="app-tasks__field">
        <input
          v-model="nameTask"
          class="app-tasks__input-name"
          placeholder="Напишите задачу"
          type="text"
        />
      </label>
      <button
        class="app-tasks__btn-add"
        :disabled="!nameTask"
        @click.prevent="addTask"
      >
        <component :is="IconAdd" />
      </button>
    </form>
    <ul class="app-tasks__list">
      <AppTask />
    </ul>
    <router-link to="/">Главная страница</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from '@/store'
import AppTask from '@/components/AppTask.vue'
import IconAdd from '@/icons/IconAdd.vue'

const nameTask = ref(null)
const tasksStore = useTasksStore()

const addTask = () => {
  const tasks = tasksStore.getTasks
  if (nameTask.value) {
    tasks.push({ name: nameTask.value, completed: false, readonly: true })
    tasksStore.setTasks(tasks)
    nameTask.value = null
  }
}
</script>

<style lang="sass" scoped>
.app-tasks
  display: flex
  width: 100%
  flex-grow: 1
  flex-direction: column
  align-items: center
  align-content: center
  gap: 20px

  &__form
    width: 100%
    display: flex

  &__field
    width: 100%

  &__input-name
    width: 100%
    flex-grow: 1
    border-top-right-radius: 0
    border-bottom-right-radius: 0
    height: 40px
    box-sizing: border-box

  &__btn-add
    border-top-left-radius: 0
    border-bottom-left-radius: 0
    padding: 0.6em
    height: 40px
    &:not(:disabled)
      background-color: $color_primary_2
      &:hover
        background-color: $color_primary_1

  &__list
    display: flex
    width: 100%
    flex-grow: 1
    flex-direction: column
    gap: 10px
    margin: 0
    padding: 0
</style>
