import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';

import { FEATURE_NAME, reducers } from './examples.state';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { TodosEffects } from './todos/todos.effects';
import { StockMarketContainerComponent } from './stock-market/components/stock-market-container.component';
import { StockMarketEffects } from './stock-market/stock-market.effects';
import { StockMarketService } from './stock-market/stock-market.service';
import { ParentComponent } from './theming/parent/parent.component';
import { ChildComponent } from './theming/child/child.component';
import { CrudComponent } from './crud/components/crud.component';
import { BooksEffects } from './crud/books.effects';
import { FormComponent } from './form/components/form.component';
import { FormEffects } from './form/form.effects';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { NotificationsComponent } from './notifications/components/notifications.component';
import { ExamplesEffects } from './examples.effects';
import { UserComponent } from './simple-state-management/components/user.component';
import { UserService } from './simple-state-management/user.service';

import { Bed1Component } from './bed1/bed1.component';
import { SummaryObjectComponent } from './bed1/summaryObject.component';
import { Bed2Component } from './bed2/bed2.component';
import { Bed3Component } from './bed3/bed3.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddObjectDialogComponent } from './bed1/addObject-dialog.component';

import { MomentModule } from 'ngx-moment';

import { logDialog } from './bed2/logDialog.component';
import { districtDetailsDialog } from './district/districtDetailsDialog.component';

import { DistrictComponent } from './district/district.component';
import { Bed1ContainerComponent } from './bed1/bed1-container/bed1-container.component';
import { BedPlanComponent } from './bed1/bed-plan.component';
import { Bed3PlanComponent } from './bed3/bed3-plan.component';
import { Bed3ContainerComponent } from './bed3/bed3-container/bed3-container.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

@NgModule({
  imports: [
    SharedModule,
    ExamplesRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([
      ExamplesEffects,
      TodosEffects,
      StockMarketEffects,
      BooksEffects,
      FormEffects
    ]),
    AgGridModule.withComponents([]),
    MomentModule
  ],
  declarations: [
    ExamplesComponent,
    TodosContainerComponent,
    StockMarketContainerComponent,
    ParentComponent,
    ChildComponent,
    AuthenticatedComponent,
    CrudComponent,
    FormComponent,
    NotificationsComponent,
    UserComponent,
    Bed1Component,
    Bed2Component,
    Bed3Component,
    AddObjectDialogComponent,
    SummaryObjectComponent,
    logDialog,
    districtDetailsDialog,
    DistrictComponent,
    Bed1ContainerComponent,
    BedPlanComponent,
    Bed3PlanComponent,
    Bed3ContainerComponent
  ],
  providers: [StockMarketService, UserService],
  entryComponents: [AddObjectDialogComponent, logDialog, districtDetailsDialog]
})
export class ExamplesModule {
  constructor() {}
}
