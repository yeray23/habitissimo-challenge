<template>
  <ol id="bullet-points" class="list-unstyled">
    <li :class="`point${i + 1}`" v-for="(point, i) in bulletPoints">
      <span class="font-weight-bold">{{ i + 1 }}</span>
      <span class="ml-4">{{ point }}</span>
    </li>
  </ol>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"

  @Component
  export default class BulletPoints extends Vue {
    @Prop() bulletPoints!: Array<string>;
  }
  Vue.component("BulletPoints", BulletPoints);
</script>

<style scoped>
  li {
    font-size: 21px;
    font-weight: 400;
    min-height: 65px;
    position: relative;
    padding-top: 30px;
  }
</style>
