import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
  <div>
  <input *ngIf="album.cart" type="checkbox" checked (click)="toggleCart(false)"/>
  <input *ngIf="!album.cart" type="checkbox" (click)="toggleCart(true)"/>
    <h1>{{ album.name }}</h1>
    <h3>{{ album.artist }}</h3>
    <h3>{{ album.price }}</h3>
    <h3>{{ album.genre }}</h3>
  </div>
  `
})

export class AlbumDisplayComponent{
  public album: Album;
  toggleCart(setState: boolean){
    this.album.cart = setState;
  }
}
