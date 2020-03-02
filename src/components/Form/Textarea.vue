<template>
  <div class="form-group">
    <Label :id="id" :value="label"></Label>
    <textarea
      class="form-control"
      :id="id"
      :cols="cols"
      :rows="rows"
      :value="value"
      @keyup="onChange"
    ></textarea>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"
  import "@/components/Form/Label"

  @Component
  export default class Textarea extends Vue {
    @Prop() id!: string;
    @Prop() cols!: number;
    @Prop() rows!: number;
    @Prop() label!: string;
    @Prop() value!: string;
    
    /**
     * On change method to send parent component the textarea value
     * @param e: event
     */
    onChange(e) {
      const value: string = e.target.value;
      this.$emit("on-change", { id: this.id, value: value });
    }
  }
  Vue.component("Textarea", Textarea);
</script>

<style scoped>

</style>
