<template>
  <section class="entry-header">
    <p class="created-at">{{ computedDate }}</p>
    <h1 class="title">{{ title }}</h1>
  </section>
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
    computedDate() {
      const createdAt = new Date(this.createdAt)
      return [
        createdAt.getFullYear(),
        ('0' + (createdAt.getMonth() + 1)).slice(-2),
        ('0' + createdAt.getDate()).slice(-2)
      ].join('.')
    }
  },
  head() {
    return {
      title: `${this.title} | `,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: `${this.title} | Asamac`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.summary
        }
      ]
    }
  }
})
</script>

<style scoped>
.entry-header {
  width: 100%;
}
.created-at {
  color: var(--deep-gray);
  font-weight: bold;
}
.title {
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 25px;
}
@media (min-width: 641px) {
  .title {
    font-size: 1.6rem;
    line-height: 30px;
  }
}
</style>
