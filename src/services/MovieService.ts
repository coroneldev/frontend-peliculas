import http from "@/http-common";
import axios from 'axios';

class MovieServiceService {
  getAll(): Promise<any> {
    return http.get("/movies");
  }

  get(id: any): Promise<any> {
    return http.get(`/movies/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/movies", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/movies/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/movies/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/movies`);
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`/movies?title=${title}`);
  }

  findByTitleOMDbApi(title: string): Promise<any> {
    //http://www.omdbapi.com/?t=iron-man&apikey=6e7b67b5
    const urlOMDbApi = 'http://www.omdbapi.com/?t='+title+'&apikey=6e7b67b5';
    return axios.get(urlOMDbApi);
  }
}

export default new MovieServiceService();