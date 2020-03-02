<template>
  <div class="progress">
    <div class="progress-bar"
         role="progressbar"
         :aria-valuenow="maxValue"
         :aria-valuemin="minValue"
         :aria-valuemax="maxValue"
         :style="{'width': `${percentage}%`}"
    >
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"

  @Component
  export default class ProgressBar extends Vue {
    @Prop() percentage!: number;
    private minValue: number = 25; // Minimum progress bar value
    private maxValue: number = 100; // Maximum progress bar value
  }
  Vue.component("ProgressBar", ProgressBar);
</script>

<style scoped>
  .progress {
    padding: 32px;
    background: white;
  }
  
  .progress-bar {
    height: 12px;
    background: #ff7300;
    border-radius: 8px;
  }
</style>
