<template>
  <section class="entry-header">
    <p class="date">{{ date }}</p>
    <h1>{{ title }}</h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    createdAt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    date() {
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

<style lang="postcss" scoped>
.entry-header {
  width: calc(100vw - 40px);
  max-width: 800px;
  @media (max-width: 800px) {
    width: calc(100vw - 40px);
  }
  & .date {
    color: var(--deep-gray);
    font-weight: 700;
  }
  & h1 {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 130%;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
}
</style>
