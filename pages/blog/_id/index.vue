<template>
  <article-container>
    <article-header
      :title="article.fields.title"
      :created-at="article.sys.createdAt"
    />
    <separator />
    <article-body :body="article.fields.body" />
  </article-container>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleContainer from '~/components/ArticleContainer.vue'
import Separator from '~/components/Separator.vue'
import ArticleHeader from '~/components/ArticleHeader.vue'
import ArticleBody from '~/components/ArticleBody.vue'
export default Vue.extend({
  components: {
    ArticleContainer,
    Separator,
    ArticleHeader,
    ArticleBody
  },
  async asyncData({ params, payload }) {
    if (payload) {
      return { article: payload }
    }
    return {
      article: await import(`~/static/articles/${params.id}.json`)
    }
  }
})
</script>
