<template>
  <nuxt-link :to="link" class="navigation-list-item">
    {{ title }}
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    link: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>

<style scoped>
.navigation-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  font-weight: 800;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 25px;
  transition: color 0.2s, background-color 0.2s;
}
.navigation-list-item:hover {
  color: var(--font-hover-color);
  background-color: var(--background-hover-color);
}
@media (min-width: 641px) {
  .navigation-list-item {
    font-size: 1.2rem;
  }
}
</style>
