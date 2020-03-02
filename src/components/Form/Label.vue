<template>
  <label :for="id">{{ value }}</label>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"

  @Component
  export default class Label extends Vue {
    @Prop() id!: string;
    @Prop() value!: string;
  }
  Vue.component("Label", Label);
</script>

<style scoped>

</style>
