import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumDisplayComponent } from './album-display.component';
import { CartPipe } from './cart.pipe';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [CartPipe, GenrePipe, ArtistPipe],
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
  <select (change)="onChange3($event.target.value)">
    <option value="all" selected="selected">All Artists</option>
    <option value="Spice Girls">Spice Girls</option>
    <option value="RadioHead">RadioHead</option>
    <option value="Pinkerton">Pinkerton</option>
    <option value="Katy Perry">Katy Perry</option>
  </select>
  <album-display *ngFor = "#currentAlbum of albumList | genre:filterGenre | artist:filterArtist | cart:filterCart"
  (click)="albumClicked(currentAlbum)"
  [album]="currentAlbum"></album-display>
  <h4>Total: {{ albumClicked(albumList) }}</h4>
  `
})


export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public cartTotal: number = 0;
  public filterGenre: string = "all";
  public filterArtist: string = "all";
  public filterCart: string = "all";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album) {
    if (clickedAlbum.cart) {
      this.cartTotal += clickedAlbum.price;
      console.log(this.cartTotal);
    }
    return this.cartTotal;
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
  onChange3(filterOption) {
    this.filterArtist = filterOption;
  }
}
