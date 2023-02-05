<template>
  <footer class="footer">
    <a 
      class="icon" 
      href="https://www.linkedin.com/mwlite/in/pavel-zubarev"
      target="_blank"
    >
      <AppLinked/>
    </a>
    <a 
      class="icon" 
      href="https://github.com/zubarevp"
      target="_blank"
    >
      <AppGithub/>
    </a>
  </footer>
</template>

<script>
  import AppLinked from "@/components/icons/linkedinBlockIcon.vue";
  import AppGithub from "@/components/icons/githubBlockIcon.vue";

  export default {
    components: { AppLinked, AppGithub, },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/variables";

  .footer {
    grid-column: 1 / 4;
    @include flex-center;
  }
  
  .icon + .icon {
    margin-left: 10px;
  }
</style>
