<template>
  <div>
    <Label :id="id" :value="label"></Label>
    <v-date-picker
      :mode="calendarSettings.datePickerMode"
      v-bind="calendarSettings"
      :value="value ? value : ''"
      @input="selectDate">
    </v-date-picker>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"
  import "@/components/Form/Label"
  import moment from "moment";

  @Component
  export default class Datepicker extends Vue {
    @Prop() id!: string;
    @Prop() label!: string;
    @Prop() value!: string;
    private calendarSettings: { datePickerMode: string; popover: object } = {
      // value: "",
      datePickerMode: "single",
      popover: {
        placement: "bottom",
        visibility: "click"
      }
    };
    
    /**
     * Select date trigger event calls function to send the value to the parent component
     * @param date: selected date
     */
    selectDate(date: string) {
      this.$emit("on-change", { id: this.id, value: moment(date, "DD/MM/YYYY").format("DD/MM/YYYY") });
    }
  }
  Vue.component("Datepicker", Datepicker);
</script>

<style scoped>

</style>
