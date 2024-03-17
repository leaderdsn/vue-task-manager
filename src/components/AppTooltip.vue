<template>
  <div class="app-tooltip">
    <span class="app-tooltip__text">
      <slot name="text"></slot>
    </span>
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.app-tooltip
  position: relative
  display: inline-block
  border-bottom: 1px dotted $color_neutral_5

  &__text
    visibility: hidden
    display: flex
    flex-wrap: wrap
    width: 100%
    height: auto
    max-width: 220px
    background-color: $color-primary_2
    color: $color_neutral_1
    font-size: 0.7em
    text-align: center
    border-radius: 6px
    padding: 5px 10px
    position: absolute
    opacity: 0.7
    z-index: 1
    top: -30px
    left: 50%

  &:hover
    .app-tooltip__text
      visibility: visible
</style>
