import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviePlayerRoutingModule } from './movie-player-routing.module';
import { MoviePlayerComponent } from './movie-player.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from '../safe.pipe';
import { MovieTitlesModule } from '../movie-titles/movie-titles.module';


@NgModule({
  declarations: [
    MoviePlayerComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    MoviePlayerRoutingModule,
    HttpClientModule,
    MovieTitlesModule
  ]
})
export class MoviePlayerModule { }
