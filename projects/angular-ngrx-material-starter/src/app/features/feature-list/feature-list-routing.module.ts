import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { DashboardProgramComponent } from './dashboard-program/dashboard-program.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureListComponent,
    data: { title: 'anms.menu.features' }
  },
  {
    path: 'dashboard-program',
    component: DashboardProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureListRoutingModule {}
