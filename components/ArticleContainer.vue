<template>
  <article class="article-container">
    <slot />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
.article-container {
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
}
</style>
