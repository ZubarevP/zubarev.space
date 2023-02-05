<template>
  <svg 
    class="svg"
    :width="sizeStr" 
    :height="sizeStr" 
    viewBox="0 0 20 20" 
    xmlns="http://www.w3.org/2000/svg"
  >
  <path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  </svg>
</template>

<script>
  export default {
    props: {
      size: { type: Number, required: true },
    },
    computed: {
      sizeStr() {
        return `${this.size}px`;
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/variables";
  .svg {
    fill: $white;
  }
</style>
