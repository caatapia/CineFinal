// directores.component.ts
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DirectorServiceService } from 'src/app/services/director-service.service';
import { PageableRequest } from 'src/app/clases/pageable-request';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PagedDirectorResponse } from 'src/app/clases/paged-director-response';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-directores',
  templateUrl: './directores.component.html',
  styleUrls: ['./directores.component.css']
})
export class DirectoresComponent implements OnInit{

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  totalElementos: number = 0;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private directorService: DirectorServiceService) {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getDirectores({ page: 0, size: 5, sort: "" });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getDirectores(request: PageableRequest) {
    this.loading = true;
    this.directorService.getData(request)
      .subscribe((data: PagedDirectorResponse) => {
        console.log(data);
        this.dataSource.data = data.lista;
        this.totalElementos = data.elementosTotales;
        this.loading = false;
        
        // Obtener las columnas de base de datos
        this.displayedColumns = Object.keys(data.lista[0]);
  
      }, error => {
        this.loading = false;
      });
  }
  nextPage(event: PageEvent) {
    console.log("Buenas");
    const request: PageableRequest = {        
      page: event.pageIndex,
      size: event.pageSize,
      sort: '' 
    };
    this.getDirectores(request);
  }

}
