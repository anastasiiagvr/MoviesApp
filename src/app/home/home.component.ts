import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../../Movie'
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[];
  id:any;

  constructor( private moviesService: MoviesService) {  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data['results'];

      console.log(this.movies)
    });
  }
}
  

