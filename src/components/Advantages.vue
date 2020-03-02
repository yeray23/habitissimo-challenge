<template>
  <div class="row">
    <div class="col-4">
      <img src="../assets/img/photo.jpg" alt="">
    </div>
    <div class="col-7 ml-4">
      <div class="hidden-sm">
        <ul class="list-unstyled">
          <li v-for="advantage in advantages">
            <strong>{{ advantage.title }}</strong>
            <p>{{ advantage.subtitle }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"

  @Component
  export default class Advantages extends Vue {
    @Prop() advantages!: Array<string>;
  }
  Vue.component("Advantages", Advantages);
</script>

<style scoped>

</style>
