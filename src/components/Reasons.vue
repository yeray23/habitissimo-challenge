<template>
  <div>
    <BulletPoints :bullet-points="bulletPoints"></BulletPoints>
    <Advantages :advantages="advantages"></Advantages>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"
  import "@/components/BulletPoints"
  import "@/components/Advantages"

  @Component
  export default class Reasons extends Vue {
    @Prop() bulletPoints!: Array<string>;
    @Prop() advantages!: Array<string>;
  }
  Vue.component("Reasons", Reasons);
</script>

<style scoped>
</style>
