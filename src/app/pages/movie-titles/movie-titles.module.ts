import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieTitlesComponent } from './movie-titles.component';



@NgModule({
  declarations: [
    MovieTitlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MovieTitlesComponent]
})
export class MovieTitlesModule { }
