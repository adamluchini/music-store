import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Album[], args){
    var desiredGenre = args[0];
    if(desiredGenre === "all"){
      return input;
    } else {
      return input.filter(function(album){
        return (album.genre === desiredGenre);
      });
    }
  }
}
