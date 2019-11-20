<template>
  <div class="flex justify-center h-full">
    <div class="flex justify-center h-full max-w-640 items-gap">
      <avatar />
      <separator />
      <social-list :items="items">
        <template #default="{item}">
          <social-list-item
            :icon="item.icon"
            :link="item.link"
            :alt="item.alt"
          />
        </template>
      </social-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Avatar from '~/components/Avatar.vue'
import Separator from '~/components/Separator.vue'
import SocialList from '~/components/SocialList.vue'
import SocialListItem from '~/components/SocialListItem.vue'
import items from '~/assets/data/socials.json'
export default Vue.extend({
  components: {
    Avatar,
    Separator,
    SocialList,
    SocialListItem
  },
  data() {
    return {
      items
    }
  },
  head() {
    return {
      title: ''
    }
  }
})
</script>
