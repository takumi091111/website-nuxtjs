<template>
  <button class="floating-button" :aria-label="label" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
})
</script>

<style lang="postcss" scoped>
.floating-button {
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  background-color: var(--background-hover-color);
  border: none;
  border-radius: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 640px) {
    display: none;
  }
  & svg {
    fill: var(--font-hover-color);
  }
}
</style>
