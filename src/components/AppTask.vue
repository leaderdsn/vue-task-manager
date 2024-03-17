<template>
  <li
    v-for="(task, idx) in tasksStore.getTasks"
    :key="task"
    class="app-task"
    :class="{ done: task.completed }"
    @click="task.readonly ? onSetComplete(idx) : null"
  >
    {{ idx + 1 }}
    <input
      v-model="task.name"
      class="app-task__name"
      type="text"
      :readonly="task.readonly"
      @input="($event, idx) => onEditTaskName($event, idx)"
    />
    <div class="app-task__actions">
      <button
        class="app-task__btn-up btn-action"
        :disabled="idx === 0"
        @click.stop="onTaskUp(idx)"
      >
        <component :is="IconUp" />
      </button>
      <button
        class="app-task__btn-down btn-action"
        :disabled="tasksStore.getTasks?.length === idx + 1"
        @click.stop="onTaskDown(idx)"
      >
        <component :is="IconDown" />
      </button>
      <button
        v-if="task.readonly"
        class="app-task__btn-edit btn-action"
        :disabled="task.completed"
        @click.stop="onEditTask(idx)"
      >
        <component :is="IconEdit" />
      </button>
      <button
        v-else
        class="app-task__btn-approve btn-action"
        @click.stop="onEditTask(idx)"
      >
        <component :is="IconApprove" />
      </button>
      <button
        class="app-task__btn-remove btn-action"
        @click.stop="onRemoveTask(idx)"
      >
        <component :is="IconTrash" />
      </button>
    </div>
  </li>
</template>

<script setup>
import { useTasksStore } from '@/store'
import IconApprove from '@/icons/IconApprove.vue'
import IconEdit from '@/icons/IconEdit.vue'
import IconTrash from '@/icons/IconTrash.vue'
import IconUp from '@/icons/IconUp.vue'
import IconDown from '@/icons/IconDown.vue'

const tasksStore = useTasksStore()

const onSetComplete = index => {
  const tasks = tasksStore.getTasks
  const res = tasks.map((item, idx) => {
    if (idx === index) {
      return {
        ...item,
        completed: !item.completed,
      }
    }

    return item
  })
  tasksStore.setTasks(res)
}

const onTaskUp = idx => {
  const tasks = tasksStore.getTasks
  const currentTask = tasks[idx]
  const previewTask = tasks[idx - 1]
  tasks[idx] = previewTask
  tasks[idx - 1] = currentTask
  tasksStore.setTasks(tasks)
}

const onTaskDown = idx => {
  const tasks = tasksStore.getTasks
  const currentTask = tasks[idx]
  const nextTask = tasks[idx + 1]
  tasks[idx] = nextTask
  tasks[idx + 1] = currentTask
  tasksStore.setTasks(tasks)
}
const onRemoveTask = index => {
  const tasks = tasksStore.getTasks
  tasks.splice(index, 1)
  tasksStore.setTasks(tasks)
}

const onEditTask = index => {
  const tasks = tasksStore.getTasks
  const res = tasks.map((item, idx) => {
    if (idx === index) {
      return {
        ...item,
        readonly: !item.readonly,
      }
    }

    return item
  })
  tasksStore.setTasks(res)
}

const onEditTaskName = (e, index) => {
  const tasks = tasksStore.getTasks
  const res = tasks.map((item, idx) => {
    if (idx === index) {
      return {
        ...item,
        name: e,
        completed: !item.completed,
      }
    }

    return item
  })
  tasksStore.setTasks(res)
}
</script>

<style lang="sass" scoped>
.app-task
  display: flex
  gap: 5px
  width: 100%
  background-color: $color_neutral_1
  color: $color_neutral_5
  font-weight: 600
  list-style-type: none
  border-radius: 10px
  align-items: center
  justify-content: space-between
  padding: 2px 4px 2px 10px
  box-sizing: border-box
  cursor: pointer

  &__name
    display: flex
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    width: 100%
    user-select: none
    background-color: transparent
    border-radius: 0
    color: $color_neutral_5
    &:read-write
      color: $color_neutral_5
      border-bottom: 2px solid $color_primary_2

  &__actions
    display: flex
    gap: 5px

  &__btn-remove
    &:hover
      background-color: $color_red_1

  &__btn-approve
    &:hover
      background-color: $color_green_1

  &.done
    color: $color_neutral_6
    font-weight: 400
    background-color: $color_neutral_3
    .app-task__name
      text-decoration: line-through
      font-style: italic

@include x-small-layout
  .app-task
    .btn-action
      font-size: 0.25em
</style>
