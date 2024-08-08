import { Injectable } from '@angular/core';
import { Clases } from '../../features/dashboard/clases/models';
import { delay, Observable, of } from 'rxjs';
import { generateId } from '../../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class ClasesService {
  private DATABASE: Clases[] = [
    {
      id: 'aaa',
      name: 'Libro 1',
      price: 1580,
    },
    {
      id: 'bbb',
      name: 'Libro 2',
      price: 1000,
    },
  ];

  getClases(): Observable<Clases[]> {
    return of([...this.DATABASE]).pipe(delay(500));
  }

  createClases(clases: Clases) {
    clases.id = generateId(6);
    this.DATABASE.push(clases);
    return clases;
  }

  editClasesById(id: string, update: Partial<Clases>) {
    this.DATABASE = this.DATABASE.map((p) =>
      p.id === id ? { ...p, ...update } : p
    );

    return id;
  }

  deleteClasesById(id: string) {
    this.DATABASE = this.DATABASE.filter((p) => p.id !== id);
    return id;
  }
}
