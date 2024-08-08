import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesComponent } from './clases.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ClasesComponent],
  imports: [CommonModule, ClasesRoutingModule, SharedModule, MatButtonModule],
})
export class ClasesModule {}
