<template>
  <nav :class="navigationClass">
    <slot />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    navigationClass() {
      return {
        navigation: true,
        open: this.isOpen
      }
    }
  }
})
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 50px;
  border-bottom: 3px solid var(--border-color);
  transition: max-height 0.2s, border-bottom 0.2s;
}
.open {
  max-height: 210px;
}
@media (min-width: 641px) {
  .navigation {
    align-items: center;
    justify-content: center;
    border-bottom: none;
  }
}
</style>
