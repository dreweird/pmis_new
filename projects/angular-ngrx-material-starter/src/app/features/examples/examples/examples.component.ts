import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'anms-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  user: any;
  examples: { link: string; label: string }[];

  constructor(private store: Store<State>) {
    this.user = JSON.parse(localStorage.getItem('ANMS-AUTH'));
    console.log(parseInt(this.user.user.pid));

    if (parseInt(this.user.user.pid) < 100) {
      this.examples = [
        { link: 'authenticated', label: 'Auth' },
        { link: 'bed1', label: 'BED-1' },
        { link: 'bed2', label: 'BED-2' },
        { link: 'bed3', label: 'BED-3' },
        { link: 'district', label: 'DISTRICT' }
      ];
    }

    if (parseInt(this.user.user.pid) == 100) {
      console.log('m&e');
      this.examples = [{ link: 'authenticated', label: 'M&E' }];
    }
    if (parseInt(this.user.user.pid) > 100) {
      this.examples = [{ link: 'authenticated', label: 'Budgets' }];
    }
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
