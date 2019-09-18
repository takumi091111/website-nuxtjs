<template>
  <ul class="navigation-list">
    <li v-for="route in routes" :key="route.name">
      <slot :route="route" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Route } from '~/assets/interfaces/Route'
export default Vue.extend({
  props: {
    routes: {
      type: Array as PropType<Route[]>,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.navigation-list {
  display: grid;
  grid-column-gap: 80px;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 150px);
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    grid-template-rows: repeat(3, 50px);
    grid-template-columns: 150px;
  }
}
</style>
