<template>
  <ul class="social-list">
    <li v-for="(item, index) in items" :key="index" class="social-list-item">
      <slot :item="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { SocialItem } from '~/assets/interfaces/SocialItem'
export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<SocialItem[]>,
      required: true,
      default: () => []
    }
  }
})
</script>

<style scoped>
.social-list {
  display: grid;
  grid-template-rows: 35px;
  grid-template-columns: repeat(3, 35px);
  gap: 0 25px;
}
.social-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}
@media (min-width: 641px) {
  .social-list {
    grid-template-rows: 50px;
    grid-template-columns: repeat(3, 50px);
  }
}
</style>
