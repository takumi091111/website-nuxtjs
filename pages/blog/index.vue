<template>
  <div class="flex h-full">
    <div class="flex justify-center max-w-640">
      <entry-list :entries="entries">
        <template #default="{entry}">
          <entry-list-item
            :id="entry.id"
            :title="entry.title"
            :created-at="entry.createdAt"
            :summary="entry.summary"
          />
        </template>
      </entry-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EntryList from '~/components/EntryList.vue'
import EntryListItem from '~/components/EntryListItem.vue'
export default Vue.extend({
  components: {
    EntryList,
    EntryListItem
  },
  async asyncData({ payload }) {
    return {
      entries: payload || (await import('~/assets/entries/list.json'!)).default
    }
  },
  head() {
    return {
      title: 'Blog | ',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Blog | Asamac'
        }
      ]
    }
  }
})
</script>
