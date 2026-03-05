import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html'
})
export class AlbumPhotos implements OnInit {

  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}
  ngOnInit() {
  const idParam = this.route.snapshot.paramMap.get('id');

  if (idParam) {
    const id = +idParam;

    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
    });
  }
}



}