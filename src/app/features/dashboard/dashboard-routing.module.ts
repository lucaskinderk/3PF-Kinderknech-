import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from './clases/clases.component';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  // Ya sabemos que el path actual es /dashboard

  {
    path: 'clases',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./clases/clases.module').then((m) => m.ClasesModule),
    // component: ClasesComponent,
  },
  {
    // /dashboard/courses
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: '**', // Cualquier ruta que no coincida con las anteriores (basicmanete es un default)
    redirectTo: '/dashboard/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

