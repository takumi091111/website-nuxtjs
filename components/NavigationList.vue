<template>
  <ul class="navigation-list">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="navigation-list-item"
    >
      <slot :item="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { MenuItem } from '~/assets/interfaces/MenuItem'
export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<MenuItem[]>,
      required: false,
      default: () => []
    }
  }
})
</script>

<style scoped>
.navigation-list {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 10px 0;
  width: 100%;
  padding: 10px 0;
}
.navigation-list-item {
  display: flex;
  justify-content: center;
}
@media (min-width: 641px) {
  .navigation-list {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    max-width: 640px;
    padding: 0;
  }
}
</style>
