import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "cart",
  pure: true
})

export class CartPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredGenreState = args[0];
    if(desiredGenreState === "cart") {
      return input.filter((album) => {
        return album.cart;
      });
    } else {
      return input;
    }
  }
}
