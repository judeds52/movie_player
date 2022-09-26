import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/player',
  },
  {
        path:'player',
        loadChildren:() => import('./pages/movie-player/movie-player.module').then(m=>m.MoviePlayerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
