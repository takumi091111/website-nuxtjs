<template>
  <button :aria-label="label" class="mobile-header-button">
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
.mobile-header-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 47px;
  border: none;
}
</style>
