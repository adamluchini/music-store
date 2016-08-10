import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumDisplayComponent } from './album-display.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumDisplayComponent],
  template: `
  <album-display *ngFor="#currentAlbum of albumList" [album]="currentAlbum"></album-display>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  createAlbum(name: string, artist: string, price: number, genre: string, id: number): void {
    this.albumList.push(
      new Album(name, artist, price, genre, id)
    );
    console.log(this.albumList);
  }
}
