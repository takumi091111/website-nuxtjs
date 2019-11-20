<template>
  <ul class="entry-list">
    <li v-for="(entry, index) in entries" :key="index" class="entry-list-item">
      <slot :entry="entry" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { BlogEntry } from '~/assets/interfaces/Entry'
export default Vue.extend({
  props: {
    entries: {
      type: Array as PropType<BlogEntry[]>,
      required: true,
      default: () => []
    }
  }
})
</script>

<style scoped>
.entry-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px 0;
  width: 100%;
}
</style>
