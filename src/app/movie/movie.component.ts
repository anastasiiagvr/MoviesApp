import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id:string;
  info:any;

  constructor(private _moviesService: MoviesService,
    private route: ActivatedRoute) {  }


  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this._moviesService.getFilm(id).subscribe(item => {
      this.info = item;
    });
  }
}

