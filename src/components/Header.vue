<template>
  <div class="row">
    <div>
      <h1 class="text-bold">{{ text.title }}</h1>
      {{ text.subtitle }}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"
  
  @Component
  export default class Header extends Vue {
    @Prop() text!: object;
  }
  Vue.component("Header", Header);
</script>

<style scoped>

</style>
