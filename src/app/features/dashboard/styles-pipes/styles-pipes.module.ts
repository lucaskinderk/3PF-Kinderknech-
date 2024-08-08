import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylesPipesRoutingModule } from './styles-pipes-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { StylesPipesComponent } from './style-pipes.component';

@NgModule({
  declarations: [StylesPipesComponent],
  imports: [CommonModule, StylesPipesRoutingModule, SharedModule],
  exports: [StylesPipesComponent],
})
export class StylesPipesModule {}
