import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.scss']
})
export class MoviePlayerComponent implements OnInit {
  player_url:any;
  constructor(private http:HttpClient,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
      // this.http.get(' https://api-uat.greatmanagerinstitute.com/api/v2/test/getTrailerList').subscribe(res=>{
      //   console.log(res);
      // })
      // this.player_url=getData.data[]
      // console.log(this.getDATA)
  }
  changeMovie(link:any){
    this.player_url=link;
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }
      getDATA={"status":true,"data":[{"name":"Avengers: Infinity War","trailer":"https://www.youtube.com/embed/6ZfuNTqbHE8","poster":"https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Avengers-3-teaser-poster-1143901.jpg","year":"2018"},{"name":"The Incredibles 2","trailer":"https://www.youtube.com/embed/ZJDMWVZta3M","poster":"https://vignette.wikia.nocookie.net/disney/images/b/b8/Incrediblesheader.jpg","year":"2018"},{"name":"Deadpool 2","trailer":"https://www.youtube.com/embed/wLeGWcVeIZ4","poster":"http://media.comicbook.com/2018/02/deadpool-1080750.jpeg","year":"2018"},{"name":"Pacific Rim Uprising","trailer":"https://www.youtube.com/embed/mqI29_cZ1NM","poster":"https://www.retrozap.com/wp-content/uploads/2018/05/rsz_solo-a-star-wars-story-artwork.jpg","year":"2018"},{"name":"Solo: A Star Wars Story","trailer":"https://www.youtube.com/embed/I7m-7EEI5vo","poster":"https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2018/02/1-18.jpg","year":"2018"},{"name":"Avengers: Infinity War","trailer":"https://www.youtube.com/embed/6ZfuNTqbHE8","poster":"https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Avengers-3-teaser-poster-1143901.jpg","year":"2018"},{"name":"The Incredibles 2","trailer":"https://www.youtube.com/embed/ZJDMWVZta3M","poster":"https://vignette.wikia.nocookie.net/disney/images/b/b8/Incrediblesheader.jpg","year":"2018"},{"name":"Deadpool 2","trailer":"https://www.youtube.com/embed/wLeGWcVeIZ4","poster":"http://media.comicbook.com/2018/02/deadpool-1080750.jpeg","year":"2018"},{"name":"Pacific Rim Uprising","trailer":"https://www.youtube.com/embed/mqI29_cZ1NM","poster":"https://www.retrozap.com/wp-content/uploads/2018/05/rsz_solo-a-star-wars-story-artwork.jpg","year":"2018"},{"name":"Solo: A Star Wars Story","trailer":"https://www.youtube.com/embed/I7m-7EEI5vo","poster":"https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2018/02/1-18.jpg","year":"2018"},{"name":"Avengers: Infinity War","trailer":"https://www.youtube.com/embed/6ZfuNTqbHE8","poster":"https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Avengers-3-teaser-poster-1143901.jpg","year":"2018"},{"name":"The Incredibles 2","trailer":"https://www.youtube.com/embed/ZJDMWVZta3M","poster":"https://vignette.wikia.nocookie.net/disney/images/b/b8/Incrediblesheader.jpg","year":"2018"},{"name":"Deadpool 2","trailer":"https://www.youtube.com/embed/wLeGWcVeIZ4","poster":"http://media.comicbook.com/2018/02/deadpool-1080750.jpeg","year":"2018"},{"name":"Pacific Rim Uprising","trailer":"https://www.youtube.com/embed/mqI29_cZ1NM","poster":"https://www.retrozap.com/wp-content/uploads/2018/05/rsz_solo-a-star-wars-story-artwork.jpg","year":"2018"},{"name":"Solo: A Star Wars Story","trailer":"https://www.youtube.com/embed/I7m-7EEI5vo","poster":"https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2018/02/1-18.jpg","year":"2018"}]}
}
