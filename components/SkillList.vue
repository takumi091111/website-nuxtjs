<template>
  <ul class="skill-list">
    <li v-for="(item, index) in items" :key="index" class="skill-list-item">
      <slot :item="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Skill } from '~/assets/interfaces/Skill'
export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<Skill[]>,
      required: true,
      default: () => []
    }
  }
})
</script>

<style scoped>
.skill-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  gap: 25px;
  width: 100%;
}
@media (min-width: 700px) {
  .skill-list {
    grid-template-columns: repeat(auto-fill, calc((100% - 25px) / 2));
  }
  .skill-list-item:last-child {
    grid-column: span 2 / 3;
  }
}
@media (min-width: 1080px) {
  .skill-list {
    grid-template-columns: repeat(auto-fill, 150px);
  }
  .skill-list-item:nth-child(3n + 1) {
    grid-column: span 2 / 2;
  }
  .skill-list-item:nth-child(3n + 2) {
    grid-column: span 2 / 4;
  }
  .skill-list-item:nth-child(3n) {
    grid-column: span 2 / 6;
  }
  .skill-list-item:nth-child(10) {
    grid-column: span 3 / 3;
  }
  .skill-list-item:nth-child(11) {
    grid-column: span 3 / 6;
  }
}
</style>
