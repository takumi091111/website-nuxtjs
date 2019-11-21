<template>
  <div class="flex justify-center h-full items-gap">
    <heading>ABOUT</heading>
    <separator />
    <p>Webの開発を得意としています。</p>
    <heading>SKILLS</heading>
    <separator />
    <skill-list :items="skills">
      <template #default="{item}">
        <skill-list-item
          :title="item.title"
          :summary="item.summary"
          :icon="item.icon"
        />
      </template>
    </skill-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Heading from '~/components/Heading.vue'
import Separator from '~/components/Separator.vue'
import SkillList from '~/components/SkillList.vue'
import SkillListItem from '~/components/SkillListItem.vue'
import skills from '~/assets/data/skills.json'
export default Vue.extend({
  components: {
    Heading,
    Separator,
    SkillList,
    SkillListItem
  },
  data() {
    return {
      skills
    }
  },
  head() {
    return {
      title: 'About | ',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'About | Asamac'
        }
      ]
    }
  }
})
</script>
