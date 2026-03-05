import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetail implements OnInit {

  album!: Album;
  newTitle = '';

  favorites: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {

    const data = localStorage.getItem('favorites');
    this.favorites = data ? JSON.parse(data) : [];

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  save() {
    const updated = { ...this.album, title: this.newTitle };

    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album.title = this.newTitle;
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

}