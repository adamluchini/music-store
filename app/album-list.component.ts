import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumDisplayComponent } from './album-display.component';
import { CartPipe } from './genre.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [CartPipe],
  directives: [AlbumDisplayComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="cart">Shopping Cart</option>
    <option value="inventory">Inventory</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | cart:filterCart"
    (click)="albumClicked(currentAlbum)"
   [album]="currentAlbum"></album-display>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public filterCart: string = "cart";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  createAlbum(name: string, artist: string, price: number, genre: string, id: number): void {
    this.albumList.push(
      new Album(name, artist, price, genre, id)
    );
    console.log(this.albumList);
  }
  onChange(filterOption) {
    this.filterCart = filterOption;
  }
}
