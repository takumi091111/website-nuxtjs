<template>
  <div class="mobile-header">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style scoped>
.mobile-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 641px) {
  .mobile-header {
    display: none;
  }
}
</style>
