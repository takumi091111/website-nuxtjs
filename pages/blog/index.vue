<template>
  <main-container>
    <entry-list :entries="entries">
      <template #default="{entry}">
        <entry-list-item :entry="entry" />
      </template>
    </entry-list>
  </main-container>
</template>

<script lang="ts">
import Vue from 'vue'
import MainContainer from '~/components/MainContainer.vue'
import EntryList from '~/components/EntryList.vue'
import EntryListItem from '~/components/EntryListItem.vue'
import { BlogEntry } from '~/assets/interfaces/Entry'
export default Vue.extend({
  components: {
    MainContainer,
    EntryList,
    EntryListItem
  },
  async asyncData({ payload }) {
    if (payload) {
      return {
        entries: payload as BlogEntry[]
      }
    }

    const entries: BlogEntry[] = (await import('~/assets/entries/list.json'!))
      .default

    return {
      entries
    }
  },
  head() {
    return {
      title: 'Blog | '
    }
  }
})
</script>
