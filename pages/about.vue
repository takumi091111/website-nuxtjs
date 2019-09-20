<template>
  <main-container is-centered>
    <section-container>
      <h1>ABOUT</h1>
      <separator />
      <p>Webの開発を得意としています。</p>
    </section-container>
    <section-container>
      <h1>SKILLS</h1>
      <separator />
      <skill-list :skills="skills">
        <template #default="{skill}">
          <skill-list-item :skill="skill">
            <template #default="{icon}">
              <skill-list-item-icon :name="icon" />
            </template>
          </skill-list-item>
        </template>
      </skill-list>
    </section-container>
  </main-container>
</template>

<script lang="ts">
import Vue from 'vue'
import MainContainer from '~/components/MainContainer.vue'
import SectionContainer from '~/components/SectionContainer.vue'
import Separator from '~/components/Separator.vue'
import SkillList from '~/components/SkillList.vue'
import SkillListItem from '~/components/SkillListItem.vue'
import SkillListItemIcon from '~/components/SkillListItemIcon.vue'
import skills from '~/assets/data/skills.json'
export default Vue.extend({
  components: {
    MainContainer,
    SectionContainer,
    Separator,
    SkillList,
    SkillListItem,
    SkillListItemIcon
  },
  data() {
    return {
      skills
    }
  }
})
</script>
