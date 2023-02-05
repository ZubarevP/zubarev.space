<template>
  <div class="wrapper">
    <AppCard>
      <template #h2>
      {{ content.blockname[lang] }} 
      </template>
    </AppCard>
    <AppCard v-for="item, i of content.body" :key="i">
      <template #h3>{{ item.year }} - {{ item.faculty[lang] }}</template>
      <p>{{ item.title[lang] }}</p>
    </AppCard>
  </div>
</template>

<script>
  import AppCard from "@/components/cardApp.vue";
  import contentJson from "../content/education.json";
  
  export default {
    components: { AppCard },
    data() {
      return {
        content: contentJson,
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
