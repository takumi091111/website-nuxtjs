<template>
  <nav class="navigation">
    <ul :class="animateClass">
      <slot />
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isExpanded: {
      type: Boolean || null,
      required: false,
      default: null
    }
  },
  computed: {
    animateClass() {
      if (this.isExpanded === null) return ''
      return this.isExpanded ? 'slideIn' : 'slideOut'
    }
  }
})
</script>

<style lang="postcss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  height: 100%;
  & ul {
    display: grid;
    grid-column-gap: 80px;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 150px);
    align-items: center;
    height: 0;
    overflow-y: hidden;
    @media (max-width: 640px) {
      grid-template-rows: repeat(3, 50px);
      grid-template-columns: 150px;
    }
    @media (min-width: 641px) {
      height: 100%;
    }
  }
}

@keyframes slideIn {
  0% {
    min-height: 0;
  }
  100% {
    min-height: 150px;
  }
}

@keyframes slideOut {
  0% {
    min-height: 150px;
  }
  100% {
    min-height: 0;
  }
}

.slideIn {
  @media (max-width: 640px) {
    animation: slideIn 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: forwards;
  }
}

.slideOut {
  @media (max-width: 640px) {
    animation: slideOut 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: forwards;
  }
}
</style>
