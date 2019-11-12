import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureListRoutingModule } from './feature-list-routing.module';
import { AgGridModule } from 'ag-grid-angular/main';
import { DashboardProgramComponent } from './dashboard-program/dashboard-program.component';

@NgModule({
  declarations: [FeatureListComponent, DashboardProgramComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeatureListRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class FeatureListModule {}
