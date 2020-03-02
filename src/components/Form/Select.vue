<template>
  <div>
    <Label :id="id" :value="label"></Label>
    <select
      class="form-control"
      :disabled="disabled"
      :id="id"
      @change="onChange"
      v-model="val"
    >
      <option value=""></option>
      <option v-for="option in options" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop, Watch } from "vue-property-decorator"
  import "@/components/Form/Label"

  @Component
  export default class Select extends Vue {
    @Prop() id!: string;
    @Prop() label!: string;
    @Prop() options!: any[];
    @Prop() disabled!: boolean;
    @Prop() value!: string;
    // Auxiliary variable to not modify the value property
    private val: string = "";
    
    @Watch("value")
    watchValue(value) {
      this.val = value;
    }
    
    /**
     * On change method to send parent component the select value
     * @param e: event
     */
    onChange(e) {
      const value: string = e.target.value;
      this.$emit("on-change", { id: this.id, value: value });
    }
  }
  Vue.component("Select", Select);
</script>

<style scoped>

</style>
