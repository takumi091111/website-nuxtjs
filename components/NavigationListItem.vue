<template>
  <nuxt-link :to="route.path" @click.native="onClick">
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
  },
  methods: {
    onClick() {
      return this.$emit('click')
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
  border-radius: 25px;
}
</style>
