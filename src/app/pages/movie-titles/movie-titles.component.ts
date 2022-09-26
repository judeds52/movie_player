import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.component.html',
  styleUrls: ['./movie-titles.component.scss']
})
export class MovieTitlesComponent implements OnInit {
  player_url:any;
  @Input('data') movie:any;
  @Output('change') change:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeMovie(link:any){
    var temp=link + '?autoplay=1'
    this.change.emit(temp)
  }
  
}
