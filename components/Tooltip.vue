<template>
  <div v-if="isActive" class="tooltip">
    <div class="tooltip-angle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style lang="postcss" scoped>
.tooltip {
  position: absolute;
  top: 60px;
  display: flex;
  justify-content: center;
  width: 135px;
  height: 35px;
  color: var(--font-hover-color);
  background-color: var(--background-hover-color);
  border-radius: 15px;
  @media (max-width: 480px) {
    width: 120px;
    height: 32px;
  }
  & .tooltip-angle {
    position: absolute;
    top: -10px;
    width: 5px;
    height: 10px;
    border-color: transparent transparent var(--background-hover-color)
      transparent;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    & p {
      position: relative;
      top: 16px;
      left: -59px;
      @media (max-width: 480px) {
        left: -51px;
      }
    }
  }
}
</style>
