import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {
    id:string;
    similar:any;

  constructor(private _movies: MoviesService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = this._route.snapshot.params.id;

    this._movies.getSimilar(id).subscribe(data => {
      this.similar = data['results'];
    });
  }

}
