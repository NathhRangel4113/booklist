import { Component, Input, OnInit } from '@angular/core';
import { BookDetail } from '../bookDetail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail!: BookDetail;

  // Variable para controlar si se muestra la descripción completa o no
  showMore = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDescription(): void {
    this.showMore = !this.showMore;
  }

  addToFavorites(): void {
    console.log('Libro agregado a favoritos:', this.bookDetail.name);
  }

  addToCart(): void {
    console.log('Libro añadido al carrito:', this.bookDetail.name);
  }

  getStarClass(star: number): string {
    return star <= this.bookDetail.rating ? 'bi-star-fill text-warning' : 'bi-star text-muted';
  }
}
