<template>
  <nuxt-link :to="path" class="entry-list-item">
    <div class="entry-list-item-header">
      <h1 class="title">{{ title }}</h1>
      <p class="created-at">{{ computedDate }}</p>
    </div>
    <p>{{ summary }}</p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    createdAt: {
      type: String,
      required: true,
      default: ''
    },
    summary: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    path() {
      return `/blog/${this.id}`
    },
    computedDate() {
      const createdAt = new Date(this.createdAt)
      return [
        createdAt.getFullYear(),
        ('0' + (createdAt.getMonth() + 1)).slice(-2),
        ('0' + createdAt.getDate()).slice(-2)
      ].join('.')
    }
  }
})
</script>

<style scoped>
.entry-list-item {
  display: block;
  padding: 15px;
  word-break: break-all;
  border: 3px solid var(--border-color);
  border-radius: 25px;
  transition: background-color 0.2s, border-color 0.2s;
}
.entry-list-item:hover {
  color: var(--font-hover-color);
  background-color: var(--background-hover-color);
  border-color: var(--border-hover-color);
}
.entry-list-item-header {
  padding-bottom: 10px;
}
.title {
  font-weight: bold;
  font-size: 1.08rem;
}
.created-at {
  color: var(--deep-gray);
}
@media (min-width: 641px) {
  .title {
    font-size: 1.4rem;
  }
}
</style>
