<template>
  <article class="entry-container">
    <slot />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
.entry-container {
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
}
</style>
