<template>
  <button class="mobile-header-button" :aria-label="label" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
})
</script>

<style lang="postcss" scoped>
.mobile-header-button {
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
}
</style>
