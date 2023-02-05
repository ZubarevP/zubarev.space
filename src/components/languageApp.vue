<template>
  <AppCard class="wrapper">
    <template #h2> {{ content.blockname[lang] }} </template>
    <div class="subwrapper">
      <AppCard v-for="item,i of content.body" :key="i">
        <template #h3>{{ item.title[lang] }}</template>
        {{ item.level[lang] }}
      </AppCard>
    </div>
  </AppCard>
</template>

<script>
  import AppCard from "@/components/cardApp.vue";
  import contentJson from "../content/language.json";
  
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
  @import "@/assets/variables";
  .wrapper {
    grid-column: 2 / 4;
  }
  
  .subwrapper {
    @include flex-space-between;
  }
</style>
