import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private itemsPerPage: number;
  private totalItems: number;
  private currentPage: number;

  constructor() {
    this.itemsPerPage = 10; // Número de elementos por página
    this.totalItems = 0; // Número total de elementos
    this.currentPage = 1; // Página actual
  }

  setItemsPerPage(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
  }

  setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  getEndIndex(): number {
    return this.getStartIndex() + this.itemsPerPage - 1;
  }

  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
