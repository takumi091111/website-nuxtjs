<template>
  <hr :class="separaterClass" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isHalf: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    separaterClass() {
      const className = 'separator'
      return [className, this.isHalf ? 'half' : ''].join(' ').trim()
    }
  }
})
</script>

<style lang="postcss" scoped>
.separator {
  width: 100%;
  max-width: 1000px;
  border-style: solid;
  border-width: 1.5px 0;
  border-radius: 2px;
}

.half {
  width: 100vw;
  max-width: 500px;
}
</style>
