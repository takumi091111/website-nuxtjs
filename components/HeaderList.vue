<template>
  <ul :class="listClass">
    <li v-for="route in routes" :key="route.name">
      <slot :route="route" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Route } from '~/assets/interfaces/Route'
export default Vue.extend({
  props: {
    routes: {
      type: Array as PropType<Route[]>,
      required: true
    },
    isExpanded: {
      type: Boolean || null,
      required: false,
      default: null
    }
  },
  computed: {
    listClass() {
      const className = 'header-list'
      if (this.isExpanded === null) return className
      return [className, this.isExpanded ? 'slideIn' : 'slideOut']
        .join(' ')
        .trim()
    }
  }
})
</script>

<style lang="postcss" scoped>
ul {
  display: grid;
  grid-column-gap: 80px;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 150px);
  align-items: center;
  justify-content: center;
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
