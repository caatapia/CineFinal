export class Director {
  id: number;
  nombre: string;
  numPeliculas: number;
  fechaNacimiento: string; // Puedes utilizar el tipo 'string' para representar fechas en Angular

  constructor(id: number, nombre: string, numPeliculas: number, fechaNacimiento: string) {
   this.id = id;    
   this.nombre = nombre;
   this.numPeliculas = numPeliculas;
   this.fechaNacimiento = fechaNacimiento;
  }
}