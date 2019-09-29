<template>
  <ul class="entry-list">
    <li v-for="entry in entries" :key="entry.id">
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
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.entry-list {
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
