<template>
  <div class="mobile-header">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
.mobile-header {
  display: none;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: flex;
  }
}
</style>
