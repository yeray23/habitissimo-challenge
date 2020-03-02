<template>
  <div class="form-group">
    <Label :id="id" :value="label"></Label>
    <input
      class="form-control"
      :id="id"
      :type="type ? type : 'text'"
      @keyup="onChange"
    >
    <div v-if="error">
      <span class="text-danger">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"
  import "@/components/Form/Label"

  @Component
  export default class Input extends Vue {
    @Prop() id!: string;
    @Prop() label!: string;
    @Prop() type!: string;
    @Prop() error!: boolean;
    @Prop() errorMessage!: string;

    /**
     * On change method to send parent component the input value
     * @param e: event
     */
    onChange(e) {
      const value: string = e.target.value;
      this.$emit("on-change", { id: this.id, value: value });
    }
  }
  Vue.component("Input", Input);
</script>

<style scoped>

</style>
