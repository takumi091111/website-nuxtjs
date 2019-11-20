<template>
  <figure class="avatar">
    <img class="logo" svg-inline src="~/assets/images/avatar.svg" />
    <h1 class="nickname">Asamac</h1>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style scoped>
.logo {
  width: 150px;
  height: 150px;
  margin-bottom: 25px;
  transition: fill 0.2s, transform 0.2s;
}
.logo:hover {
  transform: rotate(24deg);
}
.nickname {
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 35px;
  text-align: center;
}
@media (min-width: 641px) {
  .logo {
    width: 250px;
    height: 250px;
  }
  .nickname {
    font-size: 3.5rem;
    line-height: 42px;
  }
}
</style>
