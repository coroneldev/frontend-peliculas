<template>
  <div class="list row">

    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar por título"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <ul class="list-group" v-if="showMovie">
        <div class="card">
          <div class="card-header">
            <h6>{{ movie.Title }}</h6>
          </div>
          <div class="card-body mx-auto">
           <img :src=movie.Poster> 
          </div>
          <div class="card-footer text-center">
            <button v-if="movie.Title" class="btn btn-outline-primary" type="button" @click="save(movie)">Añadir a mis películas</button>
          </div>
        </div>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieService from "@/services/MovieService";
import Movie from "@/models/Movie";

export default defineComponent({
  name: "movies-list",
  data() {
    return {
      movie: {} as Movie,
      currentMovie: {} as Movie,
      currentIndex: -1,
      title: "",
      showMovie: false,
    };
  },
  methods: {
    save() {
      MovieService.create(this.movie)
        .then((response: any) => {
          console.log(response.data);
          alert('Se guardo la película')
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    searchTitle() {
      if (this.title.length >= 3) {
        this.showMovie = false;
        MovieService.findByTitleOMDbApi(this.title)
          .then((response: any) => {
            this.movie = response.data as Movie;
            this.showMovie = true;
          })
          .catch((e: Error) => {
            console.log(e);
          });
      }
      else {
        alert("De be ingresar por lo menos 3 caracteres")
      }
    },

  },
  mounted() {

  },
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>