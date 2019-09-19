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
  &:hover {
    color: var(--font-hover-color);
    background-color: var(--background-hover-color);
  }
  display: block;
  color: var(--font-color);
  font-weight: 800;
  font-size: 1.4rem;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.2s;
}
</style>
