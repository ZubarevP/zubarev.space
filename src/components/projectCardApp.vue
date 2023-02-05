<template>
  <div class="wrapper">
    <img 
      v-if="imgPosition" 
      class="image" 
      :src="img.src" 
      :alt="img.alt"
    >
    <div class="description">
      <h3 
        class="h3"
        v-if="$slots.title"
      >
        <slot name="title"></slot>
      </h3>
      <slot></slot>
    </div>
    <img 
      v-if="!imgPosition" 
      class="image" 
      :src="img.src" 
      :alt="img.alt"
    >
  </div>
</template>

<script>
  export default {
    inject: ['lang'],
    props: {
      imgPosition: {
        // left is true; right is false
        type: Boolean, default: true,
      },
      img: {
        type: Object, required: true,
        validator(value) {
          return value.hasOwnProperty('src') 
            && value.hasOwnProperty('alt'); 
        },
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/variables";
  
  .wrapper {
    width: 100%;
    @include flex-space-between;
    margin-top: 20px;
    gap: 20px;

    @media screen and (max-width: 850px) {
      @include flex-clmn-btw;
    } 
  }

  .image {
    filter: grayscale(80%);
    transition: .3s;

    &:hover {
      filter: grayscale(50%);
    }

    @media screen and (max-width: 550px) {
      width: 450px;
    }

    @media screen and (max-width: 500px) {
      width: 400px;
    }

    @media screen and (max-width: 450px) {
      width: 300px;
    }

    @media screen and (max-width: 350px) {
      width: 250px;
    }
  }

  .description {
    width: 100%;
    @include flex-clmn-btw;
  }

  .h3 {
    text-transform: uppercase;
    margin-bottom: 30px;
    font-size: 16px;

    @media screen and (max-width: 850px) {
      margin-bottom: 5px;
    } 
  }
</style>
