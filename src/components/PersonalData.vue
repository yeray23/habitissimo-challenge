<template>
  <div class="row">
    <div class="col-12">
      <Input
        id="userName"
        label="Tu nombre"
        @on-change="setPersonalData"
      >
      </Input>
    </div>
    <div class="col-12">
      <Input
        id="userEmail"
        type="email"
        label="E-mail"
        :error="isNotValidEmail"
        :error-message="userEmailError"
        @on-change="setPersonalData"
      >
      </Input>
    </div>
    <div class="col-12">
      <Input
        id="userTelephoneNumber"
        label="Teléfono"
        @on-change="setPersonalData"
      >
      </Input>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component } from "vue-property-decorator"
  import { ComponentDataInterface } from "@/interfaces/ComponentDataInterface"
  import "@/components/Form/Input"

  @Component
  export default class PersonalData extends Vue {
    private userEmail: string = "";
    private userEmailError: string = "Por favor, asegúrate de que el email sea correcto o no pertenezca al dominio 'hotmail'.";

    /**
     * We receive the child component personal data and
     * we send it to the parent "BudgetForm" component
     * @param data
     */
    setPersonalData(data: ComponentDataInterface) {
      this[data.id] = data.value;
      this.$emit("on-change", data);
    }

    /**
     * Check if email field is a valid email
     * that does not contains the "hotmail" domain
     */
    get isNotValidEmail() {
      const emailRegex = /\S+@\S+\.\S+/;
      const isEmail = emailRegex.test(this.userEmail);
      return !!this.userEmail && this.userEmail.includes("hotmail") || (!!this.userEmail && !isEmail);
    }

  }
  Vue.component("PersonalData", PersonalData);
</script>

<style scoped>

</style>
