import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumDisplayComponent } from './album-display.component';
import { CartPipe } from './cart.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [CartPipe],
  directives: [AlbumDisplayComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="cart">Shopping Cart</option>
    <option value="inventory" selected="selected">Inventory</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | cart:filterCart"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
   [album]="currentAlbum"></album-display>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterCart: string = "inventory";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum = clickedAlbum;
    // console.log(this.selectedAlbum);

    this.onAlbumSelect.emit(clickedAlbum);
    console.log(clickedAlbum);
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
