<template>
  <ul class="skill-list">
    <li v-for="skill in skills" :key="skill.name">
      <slot :skill="skill" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Skill } from '~/assets/interfaces/Skill'
export default Vue.extend({
  props: {
    skills: {
      type: Array as PropType<Skill[]>,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & li {
    &:nth-child(10) {
      flex-basis: 481.5px;
      @media (max-width: 1024px) {
        flex-basis: initial;
      }
    }
    &:nth-child(11) {
      flex-basis: 481.5px;
      @media (max-width: 1024px) {
        flex-basis: 100%;
      }
    }
    padding: calc(25px / 2) 0;
    @media (max-width: 1024px) {
      width: calc(50% - 25px);
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }
}
</style>
