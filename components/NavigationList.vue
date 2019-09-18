<template>
  <fragment>
    <li v-for="route in routes" :key="route.name">
      <slot :route="route" />
    </li>
  </fragment>
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
