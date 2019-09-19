<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isCentered: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    containerClass() {
      const className = 'main-container'
      return [className, this.isCentered ? 'centered' : ''].join(' ').trim()
    }
  }
})
</script>

<style lang="postcss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
}

.centered {
  justify-content: center;
}
</style>
