<template>
  <AppCard class="wrapper">
    <template #h2>{{ content.blockname[lang] }}</template>
    <AppCard>
      <template #h3>{{ technicalSkills.title[lang] }}</template>
      <span v-for="item,i of technicalSkills.body">
        <span v-if="i">{{ ", " }} </span> {{ item }}
      </span>
    </AppCard>
    <AppCard>
      <template #h3>{{ professionalSkills.title[lang] }}</template>
      <span v-for="item,i of professionalSkills.body">
        <span v-if="i">{{ ", " }} </span> {{ item[lang] }}
      </span>
    </AppCard>
  </AppCard>
</template>

<script>
  import AppCard from "@/components/cardApp.vue";
  import contentJson from "../content/skills.json";
  
  export default {
    components: { AppCard },
    data() {
      return {
        content: contentJson,
        technicalSkills: contentJson.body.technical,
        professionalSkills: contentJson.body.professional,
      };
    },
    inject: ['lang'],
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    grid-column: 2 / 4;
  }
</style>
