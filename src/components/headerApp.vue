<template>
  <header class="header">
    <h1 class="h1">{{ content.name[lang] }}</h1>
    <p class="p">{{ content.title[lang] }}</p>
  </header>
</template>

<script>
  import jsonContent from  "../content/head.json";
  
  export default {
    data() {
      return {
        content: jsonContent,
      };
    },
    inject: ['lang'],
  } 
</script>

<style lang="scss" scoped>
  @import "../assets/variables";
  
  .header {
    grid-column: 1 / 3;
  }

  .h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 48px;
    color: $green;
  }

  .p {
    font-size: 18px;
    color: $silver;
  }
</style>
