<template>

  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Películas Reynaldo C.</router-link>
      <div class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/movies" class="nav-link">Mis Películas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/movies-add" class="nav-link">Agregar Película</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>

</style>
