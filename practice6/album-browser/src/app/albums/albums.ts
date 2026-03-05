import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html'
})
export class Albums implements OnInit {

  albums: Album[] = [];
  loading = true;

  favorites: number[] = [];
  showFavoritesOnly = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {

    const data = localStorage.getItem('favorites');
    this.favorites = data ? JSON.parse(data) : [];

    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  delete(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }

  toggleFavorite(id: number) {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(f => f !== id);
    } else {
      this.favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

  toggleView() {
    this.showFavoritesOnly = !this.showFavoritesOnly;
  }

  get filteredAlbums() {
    if (!this.showFavoritesOnly) return this.albums;
    return this.albums.filter(a => this.favorites.includes(a.id));
  }

}