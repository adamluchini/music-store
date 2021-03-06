import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumListComponent } from './album-list.component';
import { AlbumDisplayComponent } from './album-display.component';


@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <h1>Album List:</h1>
      <album-list
      [albumList]="albums"></album-list>
    </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album('Spice World', 'Spice Girls', 5.99, 'Pop', 0),
      new Album('Weezer', 'Pinkerton', 5.99, 'Rock', 1),
      new Album('OK Computer', 'RadioHead', 9.99, 'Rock', 2),
      new Album('Teenage Dream', 'Katy Perry', 7.99, 'Pop', 3)
    ];
  }

}
