<template>
  <div class="list row">

    <div class="col-md-6">
      <h4>Mis Películas</h4>
      <ul class="list-group">
        <div class="card" v-for="(movie, index) in movies" :key="index">
          <div class="card-header">
            <h6>{{ movie.Title }}</h6>
          </div>
          <div class="card-body mx-auto">
           <img :src=movie.Poster> 
          </div>
          <div class="card-footer text-center">
            <button class="btn btn-outline-primary" type="button" @click="setActiveMovie(movie, index)" 
              data-bs-toggle="modal" data-bs-target="#exampleModal">Ver Más</button>

            <button class="btn btn-outline-danger ms-2" type="button" @click="setActiveMovie(movie, index)">Eliminar</button>
          </div>
        </div>
      </ul>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ currentMovie.Title }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><b>Year:</b> {{ currentMovie.Year }}</p>
            <p><b>Director:</b> {{ currentMovie.Director }}</p>
            <p><b>Actors:</b> {{ currentMovie.Actors }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
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
      movies: [] as Movie[],
      currentMovie: {} as Movie,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveMovies() {
      MovieService.getAll()
        .then((response: any) => {
          this.movies = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    setActiveMovie(movie: Movie, index = -1) {
      this.currentMovie = movie;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveMovies();
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