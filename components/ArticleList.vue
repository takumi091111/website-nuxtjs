<template>
  <ul class="article-list">
    <li v-for="article in articles" :key="article.sys.id">
      <slot :article="article" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Article } from '~/assets/interfaces/Article'
export default Vue.extend({
  props: {
    articles: {
      type: Array as PropType<Article[]>,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.article-list {
  display: flex;
  flex-direction: column;
  & li {
    &:nth-child(1) {
      padding: 0;
      padding-bottom: calc(25px / 2);
    }
    &:nth-last-child(1) {
      padding: 0;
      padding-top: calc(25px / 2);
    }
    padding: calc(25px / 2) 0;
  }
}
</style>
