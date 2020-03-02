<template>
  <button
    :id="id"
    type="button"
    class="btn btn-lg"
    :class="className"
    @click="onClick"
    :disabled="disabled"
  >
    {{ value }}
  </button>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"

  @Component
  export default class Button extends Vue {
    @Prop() id!: string;
    @Prop() className!: string;
    @Prop() onClick!: Function;
    @Prop() value!: string;
    @Prop() disabled!: boolean;
  }
  Vue.component("Button", Button);
</script>

<style scoped>
</style>
