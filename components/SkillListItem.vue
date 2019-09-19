<template>
  <div class="skill-list-item">
    <div class="icon-container">
      <slot :icon="skill.icon" />
    </div>
    <div class="text-container">
      <p class="name">{{ skill.name }}</p>
      <p>{{ skill.summary }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Skill } from '~/assets/interfaces/Skill'
export default Vue.extend({
  props: {
    skill: {
      type: Object as PropType<Skill>,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.skill-list-item {
  display: flex;
  align-items: center;
  min-width: calc(950px / 3);
  height: 100px;
  border: 3px solid;
  border-radius: 25px;
  @media (max-width: 1000px) {
    min-width: 100%;
  }
  & .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
  }
  & .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0 10px;
    & .name {
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
}
</style>
