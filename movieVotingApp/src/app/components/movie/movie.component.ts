import { Component } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  public movies: IMovie[] = [
    { title: 'Movie 1', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4NTMwODQwNV5BMl5BanBnXkFtZTYwNTg0Nzk2._V1_UY209_CR0,0,140,209_AL_.jpg', voted: false },
    { title: 'Movie 2', poster: 'https://m.media-amazon.com/images/M/MV5BMjA4MzM0NDAzOF5BMl5BanBnXkFtZTcwMDY3MDYyMQ@@._V1_UY209_CR0,0,140,209_AL_.jpg', voted: false },
    { title: 'Movie 3', poster: 'https://m.media-amazon.com/images/M/MV5BMTE5MTYxMDg5NV5BMl5BanBnXkFtZTYwNjc5MzQ3._V1_UY209_CR12,0,140,209_AL_.jpg', voted: false },
    { title: 'Movie 4', poster: 'https://m.media-amazon.com/images/M/MV5BMjExOTM4NDUzNV5BMl5BanBnXkFtZTcwOTgzNzczMw@@._V1_UY209_CR0,0,140,209_AL_.jpg', voted: false }
  ];

  public vote(movie: IMovie): void {
    MovieService.voteForMovie(movie);
    console.log(`${movie.voted ? 'Voted' : 'Unvoted'} for ${movie.title}`);
  }
}
