<template>
  <div class="wrapper">
    <a class="link" :href="content.body.telegram.value" target="_blank">
      <IconTelegram class="icon" :size="iconSize"/>
      <div class="text">{{ content.body.telegram.name[lang]}}</div>
    </a>
    <a class="link" :href="content.body.email.value" target="_blank">
      <IconEmail class="icon" :size="iconSize"/>
      <div class="text">{{ content.body.email.name[lang] }}</div>
    </a>
    <a class="link" :href="content.body.github.value" target="_blank">
      <IconGithub class="icon" :size="iconSize"/>
      <div class="text">{{ content.body.github.name[lang] }}</div>
    </a>
    <a class="link" :href="content.body.location.value" target="_blank">
      <IconLocation class="icon" :size="iconSize"/>
      <div class="text">{{ content.body.location.name[lang] }}</div>
    </a>
  </div>
</template>

<script>
  import IconTelegram from "@/components/icons/telegramIcon.vue";
  import IconEmail from "@/components/icons/emailIcon.vue";
  import IconGithub from "@/components/icons/githubIcon.vue";
  import IconLocation from "@/components/icons/locationIcon.vue";

  import contentJson from "../content/contact.json";
  
  export default {
    data() {
      return {
        content: contentJson, 
        iconSize: 15,
      };
    },
    components: { IconTelegram, IconEmail, IconGithub, IconLocation },
    inject: ['lang'],
  }
</script>

<style lang="scss" scoped>
  @import "../assets/variables";
  .wrapper {
    a + a {
      margin-top: 5px;
    }
  }
  
  .link {
    @include flex;
    
    &:hover {
      background-color: $light-silver;
      border-radius: 25px;
    }
  }
  
  .text {
    margin-left: 10px;
    font-size: 12px;
  }

  .icon {
    background-color: $green;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    padding: 6px;
  }
</style>
