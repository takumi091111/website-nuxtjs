<template>
  <section class="section-container">
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
.section-container {
  & h1,
  & p {
    text-align: center;
  }
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
}
</style>
