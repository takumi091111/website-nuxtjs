<template>
  <entry-container>
    <entry-header :title="entry.title" :created-at="entry.createdAt" />
    <separator />
    <entry-body :body="entry.body" />
  </entry-container>
</template>

<script lang="ts">
import Vue from 'vue'
import EntryContainer from '~/components/EntryContainer.vue'
import EntryHeader from '~/components/EntryHeader.vue'
import EntryBody from '~/components/EntryBody.vue'
import Separator from '~/components/Separator.vue'
export default Vue.extend({
  components: {
    EntryContainer,
    EntryHeader,
    EntryBody,
    Separator
  },
  async asyncData({ params, payload }) {
    if (payload) {
      return { entry: payload }
    }
    return {
      entry: await import(`~/assets/entries/${params.id}.json`)
    }
  }
})
</script>
