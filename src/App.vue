<template>
  <div id="app">
    <div class="container">
      <nav class="navbar p-3">
        <a class="navbar-brand" href="#"
           title="habitissimo - Reformas y Servicios para el Hogar">
          <img src="https://es.habcdn.com/static/img/web-logo.2x.png"
               alt="habitissimo - Reformas y Servicios para el Hogar"
               title="habitissimo - Reformas y Servicios para el Hogar">
        </a>
      </nav>
    </div>
    <div id="budget" class="container pt-5 h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-12">
          <Budget></Budget>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // @ts-ignore
  import Budget from "@/components/Budget"
  import 'bootstrap/dist/css/bootstrap.min.css'

  export default {
    components: {
      Budget
    }
  }
</script>

<style>
  .navbar-brand img {
    width: 250px;
  }
</style>
