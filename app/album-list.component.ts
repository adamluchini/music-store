import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumDisplayComponent } from './album-display.component';
import { CartPipe } from './cart.pipe';
import { GenrePipe } from './genre.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [CartPipe, GenrePipe],
  directives: [AlbumDisplayComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="cart">Shopping Cart</option>
    <option value="inventory" selected="selected">Inventory</option>
  </select>
  <select (change)="onChange2($event.target.value)">
    <option value="all" selected="selected">All Genres</option>
    <option value="Pop">Pop</option>
    <option value="Rock">Rock</option>
  </select>
  <album-display *ngFor = "#currentAlbum of albumList | genre:filterGenre | cart:filterCart" [album]="currentAlbum"></album-display>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public cartTotal: number = 0;
  public filterGenre: string = "all";
  public filterCart: string = "all";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum = clickedAlbum;
    this.cartTotal += clickedAlbum.price;
    console.log(this.cartTotal);
    this.onAlbumSelect.emit(clickedAlbum);
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
  onChange2(filterOption) {
    this.filterGenre = filterOption;
  }
}
