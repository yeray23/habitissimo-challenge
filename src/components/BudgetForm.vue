<template>
  <form>
    <header class="clearfix">
      <div class="d-flex">
        <span class="flex-grow-1 font-weight-bold">Solicita presupuestos</span>
        <small class="font-weight-bold">¡Es gratis!</small>
      </div>
    </header>
    <div id="form-body">
      <div class="col-12">
        <div class="clearfix">
          <ProgressBar :percentage="progressBarPercentage"></ProgressBar>
        </div>
        <div class="steps">
          <div id="step1" v-show="step === formSteps.DESCRIPTION_JOB">
            <JobDescription
              @on-change="setFormData"
              :budget-info="budgetInfo"
            >
            </JobDescription>
          </div>
          <div id="step2" v-show="step === formSteps.CATEGORIES_PRICE">
            <JobCategory
              @on-change="setFormData"
              :budget-info="budgetInfo"
            >
            </JobCategory>
          </div>
          <div id="step3" v-show="step === formSteps.USER_PERSONAL_DATA">
            <PersonalData
              @on-change="setFormData"
            >
            </PersonalData>
          </div>
        </div>
        <div class="col-12 mt-3 pb-4">
          <div class="text-center">
            <template v-if="step !== formSteps.DESCRIPTION_JOB">
              <Button
                id="back"
                value="Volver"
                :on-click="backStep"
              >
              </Button>
            </template>
            <Button
              id="nextStep"
              :class-name="step !== formSteps.DESCRIPTION_JOB ? 'ml-5' : ''"
              :value="step === formSteps.USER_PERSONAL_DATA ? 'Completar' : 'Continuar'"
              :on-click="nextStep"
              :disabled="disableSubmitButton"
            >
            </Button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component } from "vue-property-decorator"
  import { FormStepEnum } from "@/enum/FormStepEnum"
  import { BudgetInterface } from "@/interfaces/BudgetInterface"
  import { ComponentDataInterface } from "@/interfaces/ComponentDataInterface"
  import "@/components/ProgressBar"
  import "@/components/JobDescription"
  import "@/components/JobCategory"
  import "@/components/PersonalData"
  import "@/components/Form/Button"

  @Component
  export default class BudgetForm extends Vue {
    private totalProgressBar: number = 100; // Progress bar max value
    private totalSteps: number = 4; // Max step count value
    private step: number = 1; // Actual form step
    private formSteps = FormStepEnum;
    private budgetInfo: BudgetInterface = {
      jobDescription: "",
      estimatedDate: "",
      category: "",
      subcategory: "",
      pricePreference: "",
      userEmail: "",
      userName: "",
      userTelephoneNumber: ""
    };

    /**
     * Get actual progress bar form percentage value
     */
    get progressBarPercentage() {
      return this.totalProgressBar / (this.step == 1 ? this.totalSteps : this.totalSteps - this.step);
    }

    /**
     * Disable submit button if exists any empty required field
     */
    get disableSubmitButton() {
      let disable: boolean = true;

      if (this.step === 1)
        disable = !this.budgetInfo.jobDescription;
      else if (this.step === 2)
        disable = !this.budgetInfo.category || !this.budgetInfo.subcategory;
      else
        disable = !this.budgetInfo.userName ||
          !this.budgetInfo.userEmail ||
          (this.budgetInfo.userEmail && this.budgetInfo.userEmail.includes("hotmail")) ||
          !this.budgetInfo.userTelephoneNumber;

      return disable;
    }
    
    /**
     * Check if exists an existent budget data and set it
     */
    mounted() {
      const storageBudgetInfo = localStorage.getItem("budgetInfo");
      const storageStep = localStorage.getItem("step");
      if (storageBudgetInfo) this.budgetInfo = JSON.parse(storageBudgetInfo);
      if (storageStep) this.step = Number(storageStep);
    }

    /**
     * We receive the full form component data and
     * we set it to send it later when we finish
     * @param data
     */
    setFormData(data: ComponentDataInterface) {
      this.budgetInfo[data.id] = data.value;
      this.storageFormData();
    }

    /**
     * Set budget form and step data in order to
     * allow the user to continue through the last step that the user left
     */
    storageFormData() {
      localStorage.setItem("budgetInfo", JSON.stringify(this.budgetInfo));
      localStorage.setItem("step", String(this.step));
    }

    /**
     * Go to form next step if every required field is filled
     */
    nextStep() {
      if (this.step == 3) {
        this.submitForm();
        return;
      }
      this.step ++;
    }

    /**
     * Go to form back step
     */
    backStep() {
      this.step --;
    }

    /**
     * Complete form
     */
    submitForm() {
      this.$emit("complete-form");
    }
  }
  Vue.component("BudgetForm", BudgetForm);
</script>

<style scoped>
  form {
    padding-top: 30px;
  }
  
  header, #form-body {
    border: 1px solid black;
  }
  
  header > div > span {
    background-color: #404040;
    color: #fff;
    padding: 0 0 0 24px;
    line-height: 50px;
    margin: 0;
  }
  
  header > div > small {
    padding: 0 24px 0 24px;
    line-height: 50px;
    margin: 0;
    color: #fff;
    background: #ff7300;
  }
  
  .steps {
    padding: 20px;
  }
  
  button#nextStep {
    background: #ff7300;
    color: white;
  }
  
  button#back {
    background: white;
    color: black;
  }

</style>
