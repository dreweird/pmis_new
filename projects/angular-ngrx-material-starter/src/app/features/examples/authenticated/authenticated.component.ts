import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { PmisService } from '../../../core/services/pmis.service';

@Component({
  selector: 'anms-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  user: any = '';
  pid = 0;
  name: string = '';
  open: boolean = false;
  uid: any;

  setPID(pid: number, name: string) {
    this.pid = pid;
    this.name = name;
  }

  constructor(private mfoService: PmisService) {
    this.user = JSON.parse(localStorage.getItem('ANMS-AUTH'));
    this.uid = parseInt(this.user.user.user_id);
    if (
      parseInt(this.user.user.pid) === 100 ||
      parseInt(this.user.user.pid) === 101
    ) {
      this.open = true;
    }
  }

  ngOnInit() {}
}
