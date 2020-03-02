<template>
  <div class="container">
    <template v-if="!completedForm">
      <Header :text="pageText.header"></Header>
    </template>
    <div class="row">
      <template v-if="!completedForm">
        <div class="col-5">
          <Reasons
            :bullet-points="pageText.bulletPoints"
            :advantages="pageText.advantages"
          >
          </Reasons>
        </div>
        <div class="col-7">
          <BudgetForm @complete-form="completeForm"></BudgetForm>
        </div>
      </template>
      <template v-else>
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-12 offset-6 p-5">
            <img class="rounded mx-auto d-block" src="../assets/img/check_icon_green.png">
            <h2 class="text-success">Hemos recibido tu información correctamente.</h2>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component } from "vue-property-decorator"
  import { pageText } from "@/utils/Text"
  import "@/components/Header"
  import "@/components/Reasons"
  import "@/components/BudgetForm"

  @Component
  export default class Budget extends Vue {
    // Web page default texts
    private pageText: object = pageText;
    private completedForm: boolean = false;

    /**
     * End budget form and show received budget screen
     */
    completeForm() {
      this.completedForm = true;
      // Delete storage data if exists
      localStorage.clear();
    }
    
  }
  Vue.component("Budget", Budget);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
