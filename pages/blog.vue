<template>
  <main-container is-centered>
    <article-list :articles="articles">
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
export default Vue.extend({
  components: {
    MainContainer,
    ArticleList,
    ArticleListItem
  },
  data() {
    return {
      articles: []
    }
  }
})
</script>
