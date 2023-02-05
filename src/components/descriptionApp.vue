<template>
  <div class="wrapper">
    <img class="image" :src="content.body.photo.link" alt="zubarev's photo">
    <p class="text">{{ content.body.text[lang] }}</p>
  </div>
</template>

<script>
  import contentJson from "../content/description.json";
  
  export default {
    data() {
      return {
        content: contentJson,
      };
    },
    inject: ['lang'],
  }
</script>

<style lang="scss" scoped>
  @import "../assets/variables";
  .wrapper {
    @include flex-space-between;
    grid-column: 1 / 4;
    padding: 20px 0;

    @media screen and (max-width: 500px) {
      @include flex-clmn-btw;
    }
  }  

  .image {
    width: 150px;
    border-radius: 50%;
    filter: grayscale(80%);
    transition: .3s;

    &:hover {
      filter: grayscale(0%);
    }
  }

  .text {
    font-size: 18px;
    margin-left: 20px;
    
    @media screen and (max-width: 500px) {
      margin: 20px 0 0;
    }
  }
</style>
