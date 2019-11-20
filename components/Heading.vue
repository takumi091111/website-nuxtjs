<template>
  <h1 class="heading">
    <slot />
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style scoped>
.heading {
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 20px;
}
@media (min-width: 641px) {
  .heading {
    font-size: 2rem;
  }
}
</style>
