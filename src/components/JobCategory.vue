<template>
  <div>
    <div class="col-12">
      <Select
        id="category"
        label="Selecciona categoría"
        :options="categories"
        :value="budgetInfo.category"
        @on-change="setCategoryData"
      >
      </Select>
    </div>
    <div class="col-12 mt-4">
      <Select
        id="subcategory"
        label="Selecciona sub categoría"
        :options="subcategories"
        :value="budgetInfo.subcategory"
        :disabled="!category"
        @on-change="setCategoryData"
      >
      </Select>
    </div>
    <div class="col-12 mt-4">
      <Select
        id="pricePreference"
        label="Preferencia de precio"
        :options="pricePreferences"
        :value="budgetInfo.pricePreference"
        @on-change="setCategoryData"
      >
      </Select>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { Component, Prop, Watch } from "vue-property-decorator"
  import ApiService from "@/services/Api.service"
  import { ComponentDataInterface } from "@/interfaces/ComponentDataInterface"
  import { BudgetInterface } from "@/interfaces/BudgetInterface";
  import { pricePreferences } from "@/utils/Text"
  import "@/components/Form/Select"

  const categoriesUrl: string = "http://api.habitissimo.es/category/list/";

  @Component
  export default class JobCategory extends Vue {
    @Prop() budgetInfo!: BudgetInterface;
    private categories: any[] = []; // Array that contains the multiple categories
    private subcategories: any[] = []; // Array that contains the multiple subcategories filtered by category
    private category: string = ""; // Selected category
    private pricePreferences: any[] = pricePreferences;

    /**
     * Watcher to set category data if exists
     */
    @Watch("budgetInfo")
    watchBudgetInfo(value) {
      this.category = value.category;
      this.getSubcategories();
    }

    mounted() {
      this.getCategories();
      this.category = this.budgetInfo ? this.budgetInfo.category : "";
    }

    /**
     * Obtains budget type of categories
     */
    async getCategories() {
      const categories = await ApiService.getApiData(categoriesUrl);
      this.categories = categories.map(category => ({
        id: category.id,
        name: category.name
      }));
    }

    /**
     * Obtains budget subcategories filtered by the selected category
     */
    async getSubcategories() {
      this.subcategories = await ApiService.getApiData(`${ categoriesUrl }${ this.category }`);
    }

    /**
     * We receive the child component category data and
     * we send it to the parent "BudgetForm" component
     * @param data
     */
    setCategoryData(data: ComponentDataInterface) {
      this[data.id] = data.value;
      this.$emit("on-change", data);
      if (data.id === "category") this.getSubcategories();
    }

  }
  Vue.component("JobCategory", JobCategory);
</script>

<style scoped>

</style>
