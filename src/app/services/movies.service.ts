import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../Movie'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl:string = "https://api.themoviedb.org/3/movie/popular?api_key=7aee59387a321b65a42d3f6eb592312b&language=en-US&page=1";
  filmUrl:string;
  similarUrl:string;

  constructor(private http: HttpClient) { }

  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getFilm(id:string):Observable<any> {
    this.filmUrl = "https://api.themoviedb.org/3/movie/"+id+"?api_key=7aee59387a321b65a42d3f6eb592312b&language=en-US"
    return this.http.get<any>(this.filmUrl);
  }

  getSimilar(id:string):Observable<any> {
    this.similarUrl = "https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=7aee59387a321b65a42d3f6eb592312b&language=en-US"
    return this.http.get<any>(this.similarUrl);
  }
}
