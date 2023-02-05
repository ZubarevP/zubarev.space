<template>
  <AppCard class="wrapper">
    <template #h2>
      {{ content.blockname[lang] }}
    </template>
    <AppProjectCard
      v-for="item, i of content.body"
      :img="{ 
        src: item.image.src, 
        alt: item.image.alt 
      }"
    >
      <template #title>
        {{ item.title[lang] }}
      </template>
        {{ item.tech }}
      <div class="buttons">
        <a 
          v-if="item.link.github"
          class="btn"
          :href="item.link.github"
          target="_blanck"
        >
          {{ codeButton }}
        </a>
        <a 
          class="btn"
          :href="item.link.deploy"
          target="_blanck"
        >
          {{ deployButton }}
        </a>
      </div>
    </AppProjectCard>
  </AppCard>
</template>

<script>
  import AppCard from "@/components/cardApp.vue";
  import AppProjectCard from "@/components/projectCardApp.vue";
  import contentJson from "@/content/projects.json";
  
  export default {
    data() {
      return {
        content: contentJson,
      };
    },
    components: { AppCard, AppProjectCard, },
    computed: {
      codeButton() {
        return this.lang == "en"? "code": "код";
      },
      deployButton() {
        return this.lang == "en"? "link": "ссылка";
      }
    },
    inject: ['lang'],
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/variables";
  
  .wrapper {
    grid-column: 1 / 4;

    @media screen and (max-width: 850px) {
      width: 100%;
    } 
  }

  .buttons {
    margin-top: 10px;
  }
</style>
