import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { MovieComponent } from '../app/movie/movie.component';
import { SimilarComponent } from '../app/similar/similar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent},
  { path: 'movie/:id', component: SimilarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
