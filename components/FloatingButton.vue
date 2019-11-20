<template>
  <button :aria-label="label" class="floating-button">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>

<style scoped>
.floating-button {
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: none;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--background-hover-color);
  border-radius: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s;
}
.floating-button > svg {
  fill: var(--font-hover-color);
}
.floating-button:hover {
  background-color: var(--background-color);
}
.floating-button:hover > svg {
  fill: var(--font-color);
}
@media (min-width: 641px) {
  .floating-button {
    display: flex;
  }
}
</style>
