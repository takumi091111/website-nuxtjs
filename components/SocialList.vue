<template>
  <ul class="social-list">
    <li v-for="link in links" :key="link.name">
      <slot :link="link" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Link } from '~/assets/interfaces/Link'
export default Vue.extend({
  props: {
    links: {
      type: Array as PropType<Link[]>,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.social-list {
  display: grid;
  grid-column-gap: 25px;
  grid-template-rows: 50px;
  grid-template-columns: repeat(3, 50px);
  justify-content: center;
}
</style>
