<template>
  <div>
    <h2 class="h2" v-if="$slots.h2">
      <slot name="h2"></slot>
    </h2>
    <h3 class="h3" v-if="$slots.h3">
      <slot name="h3"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/variables";

  .h2 {
    color: $green;
    font-size: 18px;
    line-height: 22px;
    border-left: 5px solid $green;
    margin-top: 10px;
    padding-left: 10px;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  .h3 {
    color: $black;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 5px;
  }
</style>
