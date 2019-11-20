<template>
  <div class="flex h-full">
    <article class="flex justify-center max-w-800 items-gap">
      <entry-header :title="entry.title" :created-at="entry.createdAt" />
      <separator />
      <entry-body :body="entry.body" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EntryHeader from '~/components/EntryHeader.vue'
import EntryBody from '~/components/EntryBody.vue'
import Separator from '~/components/Separator.vue'
export default Vue.extend({
  components: {
    EntryHeader,
    EntryBody,
    Separator
  },
  async asyncData({ params, payload }) {
    const id = params.id
    return {
      entry: payload || (await import(`~/assets/entries/${id}.json`)).default
    }
  }
})
</script>
