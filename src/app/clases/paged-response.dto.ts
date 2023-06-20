// paged-response.dto.ts
export class PagedResponseDto<T> {
    elementosTotales: number;
    lista: T[];
    primera: boolean;
    ultima: boolean;
    totalPaginas: number;
    sizePagina: number;
    numeroPagina: number;
    elementosDeLaPagina: number;
  
    constructor(
      elementosTotales: number,
      lista: T[],
      primera: boolean,
      ultima: boolean,
      totalPaginas: number,
      sizePagina: number,
      numeroPagina: number,
      elementosDeLaPagina: number
    ) {
      this.elementosTotales = elementosTotales;
      this.lista = lista;
      this.primera = primera;
      this.ultima = ultima;
      this.totalPaginas = totalPaginas;
      this.sizePagina = sizePagina;
      this.numeroPagina = numeroPagina;
      this.elementosDeLaPagina = elementosDeLaPagina;
    }
  }
  