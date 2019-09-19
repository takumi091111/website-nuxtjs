<template>
  <fragment>
    <img v-if="name === 'cs'" svg-inline src="~/assets/images/cs.svg" />
    <img v-if="name === 'css'" svg-inline src="~/assets/images/css.svg" />
    <img v-if="name === 'git'" svg-inline src="~/assets/images/git.svg" />
    <img v-if="name === 'html'" svg-inline src="~/assets/images/html.svg" />
    <img v-if="name === 'java'" svg-inline src="~/assets/images/java.svg" />
    <img v-if="name === 'js'" svg-inline src="~/assets/images/js.svg" />
    <img v-if="name === 'mysql'" svg-inline src="~/assets/images/mysql.svg" />
    <img v-if="name === 'php'" svg-inline src="~/assets/images/php.svg" />
    <img v-if="name === 'ps'" svg-inline src="~/assets/images/ps.svg" />
    <img v-if="name === 'rb'" svg-inline src="~/assets/images/rb.svg" />
    <img v-if="name === 'ts'" svg-inline src="~/assets/images/ts.svg" />
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
svg {
  width: 50px;
  height: 50px;
}
</style>
