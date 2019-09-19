<template>
  <main-container is-centered>
    <article-list :articles="articles.items">
      <template #default="{article}">
        <article-list-item :article="article" />
      </template>
    </article-list>
  </main-container>
</template>

<script lang="ts">
import Vue from 'vue'
import MainContainer from '~/components/MainContainer.vue'
import ArticleList from '~/components/ArticleList.vue'
import ArticleListItem from '~/components/ArticleListItem.vue'
import { Articles } from '~/assets/interfaces/Article'
import { fetchArticles } from '~/assets/utils/api'
export default Vue.extend({
  components: {
    MainContainer,
    ArticleList,
    ArticleListItem
  },
  async asyncData({ payload }) {
    if (payload) {
      return { articles: payload as Articles }
    }
    return {
      articles: await fetchArticles(1000)
    }
  }
})
</script>
