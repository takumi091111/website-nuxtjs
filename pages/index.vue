<template>
  <main-container is-centered>
    <avatar />
    <separator is-half />
    <social-list :links="links">
      <template #default="{link}">
        <social-list-item :link="link" />
      </template>
    </social-list>
  </main-container>
</template>

<script lang="ts">
import Vue from 'vue'
import MainContainer from '~/components/MainContainer.vue'
import Avatar from '~/components/Avatar.vue'
import Separator from '~/components/Separator.vue'
import SocialList from '~/components/SocialList.vue'
import SocialListItem from '~/components/SocialListItem.vue'
import links from '~/assets/data/links.json'
export default Vue.extend({
  components: {
    MainContainer,
    Avatar,
    Separator,
    SocialList,
    SocialListItem
  },
  data() {
    return {
      links
    }
  }
})
</script>
