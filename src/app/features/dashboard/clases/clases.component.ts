import { Component, OnInit } from '@angular/core';
import { Clases } from './models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasesService } from '../../../core/services/clases.service';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss',
})
export class ClasesComponent implements OnInit {
  clases: Clases[] = [];
  loading = false;
  displayedColumns = ['id', 'name', 'price', 'actions'];
  clasesForm: FormGroup;

  editingClases: Clases | null = null;

  constructor(
    private fb: FormBuilder,
    private clasesService: ClasesService 
  ) {
    this.clasesForm = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadClases();
  }

  loadClases() {
    this.loading = true;
    this.clasesService.getClases().subscribe({
      next: (clasesFromDB) => {
        this.clases = clasesFromDB;
      },
      error: () => {},
      complete: () => {
        this.loading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.clasesForm.invalid) {
      alert('El form es invalido');
    } else {
      if (!!this.editingClases) {
        // esta editando....
        this.clasesService.editClasesById(
          this.editingClases.id,
          this.clasesForm.value
        );
        this.editingClases = null;
      } else {
        // esta creando
        this.clasesService.createClases(this.clasesForm.value);
      }

      this.loadClases();
      this.clasesForm.reset();
    }
  }

  onDelete(id: string) {
    if (confirm('Esta seguro de querer borrar?')) {
      this.clasesService.deleteClasesById(id);
      this.loadClases();
    }
  }

  onEdit(editingClases: Clases) {
    this.editingClases = editingClases;

    this.clasesForm.patchValue(editingClases);
  }
}
