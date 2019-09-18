<template>
  <nuxt-link :to="route.path">
    {{ route.name }}
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Route } from '~/assets/interfaces/Route'
export default Vue.extend({
  props: {
    route: {
      type: Object as PropType<Route>,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
a {
  display: block;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
}
</style>
