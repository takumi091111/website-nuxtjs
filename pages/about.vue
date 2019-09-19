<template>
  <main-container>
    <section>
      <h1>ABOUT</h1>
      <p>Webの開発を得意としています。</p>
    </section>
    <separator />
    <section>
      <h1>SKILLS</h1>
      <skill-list :skills="skills">
        <template #default="{skill}">
          <skill-list-item :skill="skill">
            <template #default="{icon}">
              <skill-list-item-icon :name="icon" />
            </template>
          </skill-list-item>
        </template>
      </skill-list>
    </section>
  </main-container>
</template>

<script lang="ts">
import Vue from 'vue'
import MainContainer from '~/components/MainContainer.vue'
import Separator from '~/components/Separator.vue'
import SkillList from '~/components/SkillList.vue'
import SkillListItem from '~/components/SkillListItem.vue'
import SkillListItemIcon from '~/components/SkillListItemIcon.vue'
import skills from '~/assets/data/skills'
export default Vue.extend({
  components: {
    MainContainer,
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
