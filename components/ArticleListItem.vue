<template>
  <nuxt-link class="article-list-item" :to="link">
    <h1>{{ article.fields.title }}</h1>
    <p class="date">{{ date }}</p>
    <p class="summary">{{ article.fields.summary }}</p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Article } from '~/assets/interfaces/Article'
export default Vue.extend({
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true
    }
  },
  computed: {
    link() {
      const link = `/blog/${this.article.sys.id}`
      return link
    },
    date() {
      const createdAt = new Date(this.article.sys.createdAt)
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
.article-list-item {
  &:hover {
    color: var(--font-hover-color);
    background-color: var(--background-hover-color);
    border-color: var(--border-hover-color);
  }
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  color: var(--font-color);
  text-decoration: none;
  border: 3px solid var(--border-color);
  border-radius: 25px;
  transition: all 0.2s;
  & h1 {
    font-weight: 700;
    font-size: 1.4rem;
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  & .date {
    color: var(--deep-gray);
  }
  & .summary {
    padding: 10px 0 0 0;
  }
}
</style>
