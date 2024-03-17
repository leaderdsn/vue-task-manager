<template>
  <header class="app-header">
    <strong>
      Количество задач:
      <span class="app-header__count">{{ tasksStore.getTasks?.length }}</span>
    </strong>
    <strong>
      Выполнено:
      <span class="app-header__count">{{
        tasksStore.getTasksCompleted?.length
      }}</span>
    </strong>
    <strong>
      Осталось:
      <span class="app-header__count">{{
        tasksStore.getTasksNotCompleted?.length
      }}</span>
    </strong>
  </header>
</template>

<script setup>
import { useTasksStore } from '@/store'
const tasksStore = useTasksStore()
</script>

<style lang="sass" scoped>
.app-header
  display: flex
  gap: 20px
  position: fixed
  width: 100%
  top: 0
  left: 0
  height: 60px
  overflow: hidden
  background-color: $color_neutral_1
  color: $color_neutral_4
  box-shadow: $box-shadow
  align-items: center
  justify-content: center

  &__count
    color: $color_primary_2

@include x-small-layout
  .app-header
    font-size: 0.9em
</style>
