<template>
  <ul class="article-list">
    <li v-for="article in articles.items" :key="article.sys.id">
      <slot :article="article" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Articles } from '~/assets/interfaces/Article'
export default Vue.extend({
  props: {
    articles: {
      type: Object as PropType<Articles>,
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
