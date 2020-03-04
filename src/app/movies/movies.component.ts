import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  imgageUrl: string = "https://image.tmdb.org/t/p/w500";
  hasMovies: boolean = true;
  movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Todo pass inteface
  myMoviesList(data: any){
    if(data.results.length > 0){
      this.hasMovies = true;
    }
    else{      
      this.hasMovies = false;
    }
    let moviesList:Movie[] = data.results;
    this.movies = moviesList;
  }
  getMovieId(id: number){
    this.router.navigate(["/movie" ,id]);
  }
}
