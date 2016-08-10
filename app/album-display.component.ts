import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <h1>{{ album.name }}</h1>
    <h3>{{ album.artist }}</h3>
    <h3>{{ album.price }}</h3>
    <h3>{{ album.genre }}</h3>
  `
})

export class AlbumDisplayComponent {
  public album: Album;
}
