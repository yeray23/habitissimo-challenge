<template>
  <div>
    <Textarea
      id="jobDescription"
      :cols="textAreaCols"
      :rows="textAreaRows"
      :label="textAreaLabel"
      :value="budgetInfo.jobDescription"
      @on-change="sendData"
    >
    </Textarea>
    <Datepicker
      id="estimatedDate"
      label="Fecha de estimación"
      :value="formatEstimatedDate()"
      @on-change="sendData"
    >
    </Datepicker>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop } from "vue-property-decorator"
  import { ComponentDataInterface } from "@/interfaces/ComponentDataInterface"
  import { BudgetInterface } from "@/interfaces/BudgetInterface";
  import "@/components/Form/Label"
  import "@/components/Form/Textarea"
  import "@/components/Form/Datepicker"
  import "@/components/Form/Button"
  import moment from "moment";

  @Component
  export default class JobDescription extends Vue {
    @Prop() budgetInfo!: BudgetInterface;
    private textAreaCols: number = 25;
    private textAreaRows: number = 8;
    private textAreaLabel: string = "Descripción del trabajo";

    /**
     * We receive the child component description data and
     * we send it to the parent "BudgetForm" component
     * @param data
     */
    sendData(data: ComponentDataInterface) {
      this[data.id] = data.value;
      this.$emit("on-change", data);
    }

    /**
     * Format estimated date to date (calendar allowed data type)
     * if user completed the 1st step and and he had left the page
     */
    formatEstimatedDate() {
      return moment(this.budgetInfo.estimatedDate, "DD/MM/YYYY").toDate();
    }

  }
  Vue.component("JobDescription", JobDescription);
</script>

<style scoped>
</style>
