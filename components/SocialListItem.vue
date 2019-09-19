<template>
  <a class="social-list-item" :href="link.url">
    <img
      v-if="link.name === 'Discord'"
      svg-inline
      src="~/assets/images/discord.svg"
    />
    <img
      v-if="link.name === 'Twitter'"
      svg-inline
      src="~/assets/images/twitter.svg"
    />
    <img
      v-if="link.name === 'GitHub'"
      svg-inline
      src="~/assets/images/github.svg"
    />
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Link } from '~/assets/interfaces/Link'
export default Vue.extend({
  props: {
    link: {
      type: Object as PropType<Link>,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.social-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  & svg {
    width: 40px;
    height: 40px;
  }
}
</style>
