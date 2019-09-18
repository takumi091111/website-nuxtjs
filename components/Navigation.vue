<template>
  <nav :class="navClass">
    <slot />
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
    navClass() {
      const className = 'navigation'
      if (this.isExpanded === null) return className
      return [className, this.isExpanded ? 'slideIn' : 'slideOut']
        .join(' ')
        .trim()
    }
  }
})
</script>

<style lang="postcss" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0;
  overflow-y: hidden;
  @media (min-width: 641px) {
    height: 100%;
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
