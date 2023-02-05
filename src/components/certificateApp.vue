<template>
  <AppCard class="wrapper">
    <template #h2>
      {{ content.blockname[lang] }}
    </template>
    <AppCard v-for="item, i of content.body" :key="i">
      <template #h3>
        {{ item.year }} - {{ item.title[lang] }}
      </template>
      <p>
        {{ instructor }}: {{ item.author }}
      </p>
      <p v-if="item.description">
        <a class="link" :href="item.description" target="_blank">
          {{ description }}
        </a>
      </p>
      <p v-if="item.certificate">
        <a class="link" :href="item.certificate" target="_blank">{{ certificate }}</a>
      </p>
    </AppCard>
  </AppCard>
</template>

<script>
  import AppCard from "@/components/cardApp.vue";
  import contentJson from "../content/certificates.json";

  export default {
    components: { AppCard },
    data() {
      return {
        content: contentJson,        
      };
    },
    inject: ['lang'],
    computed: {
      instructor() {
        return this.lang === "en" 
          ? "instructor"
          : "организатор курса";
      },
      description() {
        return this.lang === "en" 
          ? "course description"
          : "описание курса";
      },
      certificate() {
        return this.lang === "en" 
          ? "certificate"
          : "сертификат";
      },
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    grid-row: 3 / 7;
  }

  .link:hover {
    letter-spacing: 1px; 
  }  
</style>
