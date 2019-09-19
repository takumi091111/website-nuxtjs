<template>
  <figure class="avatar">
    <img svg-inline src="~/assets/images/avatar.svg" />
    <h1>Asamac</h1>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  & svg {
    &:hover {
      transform: rotate(24deg);
    }
    width: 250px;
    height: 250px;
    transition: transform 0.3s;
    @media (max-width: 480px) {
      width: 150px;
      height: 150px;
    }
  }
  & h1 {
    padding-top: 25px;
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 80%;
    text-align: center;
  }
}
</style>
