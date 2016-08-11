// import { Component, EventEmitter } from 'angular2/core';
// import { Album } from './album.model';
// import { AlbumDisplayComponent } from './album-display.component';
// import { GenrePipe } from './genre.pipe';
//
// @Component({
//   selector: 'album-list',
//   inputs: ['albumList'],
//   outputs: ['onAlbumSelect'],
//   pipes: [GenrePipe],
//   directives: [AlbumDisplayComponent],
//   template: `
//   <select (change)="onChange($event.target.value)" class="filter">
//     <option value="all">All</option>
//     <option value="Pop" selected="selected">Pop</option>
//   </select>
//   <album-display *ngFor="#currentAlbum of albumList | genre:filterGenre"
//     (click)="albumClicked(currentAlbum)"
//     [class.selected]="currentAlbum === selectedAlbum"
//    [album]="currentAlbum"></album-display>
//    <cart-display> </cart-display>
//   `
// })
//
// export class AlbumListComponent {
//   public albumList: Album[];
//   public onAlbumSelect: EventEmitter<Album>;
//   public selectedAlbum: Album;
//   public cartTotal: number = 0;
//   public filterGenre: string = "all";
//   constructor() {
//     this.onAlbumSelect = new EventEmitter();
//   }
//   albumClicked(clickedAlbum: Album): void {
//     this.selectedAlbum = clickedAlbum;
//     this.cartTotal += clickedAlbum.price;
//     console.log(this.cartTotal);
//
//     // console.log(this.selectedAlbum);
//
//     this.onAlbumSelect.emit(clickedAlbum);
//     // console.log(clickedAlbum.price);
//   }
//   createAlbum(name: string, artist: string, price: number, genre: string, id: number): void {
//     this.albumList.push(
//       new Album(name, artist, price, genre, id)
//     );
//     console.log(this.albumList);
//   }
//   onChange(filterOption) {
//     this.filterGenre = filterOption;
//   }
// }
