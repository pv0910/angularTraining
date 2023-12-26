import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public static voteForMovie(selectedMovie: IMovie): void {
    selectedMovie.voted = !selectedMovie.voted;
  }
}
