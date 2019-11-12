import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MFOPhysical } from './mfo';

@Injectable({
  providedIn: 'root'
})
export class PmisService {
  apiRoot: string = 'http://172.16.130.10:3115';

  constructor(private http: HttpClient) {}

  login(username, password) {
    const url = `${this.apiRoot}/login`;
    return this.http.post(url, { username, password });
  }

  getFinPerformance(): Observable<any> {
    const url = `${this.apiRoot}/getFinPerformance`;
    return this.http.get<any>(url);
  }

  getPerformance_program(pid: number) {
    const url = `${this.apiRoot}/getFinPerformance`;
    return this.http.post<any>(url, { pid });
  }

  getMFO(pid: number): Observable<any> {
    const url = `${this.apiRoot}/mfos`;
    return this.http.post<any>(url, { pid });
  }

  getLastUpdated(beds: number, pid: number) {
    const url = `${this.apiRoot}/lastUpdated`;
    return this.http.post<any>(url, { pid, beds });
  }

  updateAllotment(id: number, value: number, col: string) {
    const url = `${this.apiRoot}/updateAllotment`;
    return this.http.post(url, { id, value, col });
  }

  getMFOPhysical(pid: number): Observable<MFOPhysical[]> {
    const url = `${this.apiRoot}/mfosPhysical`;
    return this.http.post<any>(url, { pid });
  }

  getSummaryObject(pid: number): Observable<any> {
    const url = `${this.apiRoot}/summaryObject`;
    return this.http.post(url, { pid });
  }

  getObjectCode(): Observable<any> {
    const url = `${this.apiRoot}/getObjectCode`;
    return this.http.get(url);
  }

  addObject(mfo_id, object_id, pid) {
    const url = `${this.apiRoot}/addObject`;
    return this.http.post(url, { mfo_id, object_id, pid });
  }

  updatePhysical(id: number, value: number, col: string) {
    const url = `${this.apiRoot}/updatePhysical`;
    return this.http.post<any>(url, { id, value, col });
  }

  getLogs(beds: number, pid: number): Observable<any> {
    const url = `${this.apiRoot}/getLogs`;
    return this.http.post<any>(url, { pid, beds });
  }

  getDistrict(pid: number): Observable<any> {
    const url = `${this.apiRoot}/getDistrict`;
    return this.http.post<any>(url, { pid });
  }

  getDistrictDetails(data): Observable<any> {
    const url = `${this.apiRoot}/getDistrictDetails`;
    return this.http.post<any>(url, { data });
  }

  updateDistrictDetails(data): Observable<any> {
    const url = `${this.apiRoot}/updateDistrictDetails`;
    return this.http.post<any>(url, { data });
  }

  updateLogs(
    mfo_id: number,
    value: number,
    pid: number,
    col: string,
    month: string,
    beds: number,
    prov: any,
    dist: any,
    mun: any
  ): Observable<any> {
    const url = `${this.apiRoot}/addLogs`;
    let mo: string;
    if (
      month === 'jan' ||
      month === 'jan_t' ||
      month === 'jant' ||
      month === 'jana' ||
      month === 'janr'
    )
      mo = 'January';
    if (
      month === 'feb' ||
      month === 'feb_t' ||
      month === 'febt' ||
      month === 'feba' ||
      month === 'febr'
    )
      mo = 'February';
    if (
      month === 'mar' ||
      month === 'mar_t' ||
      month === 'mart' ||
      month === 'mara' ||
      month === 'marr'
    )
      mo = 'March';
    if (
      month === 'apr' ||
      month === 'apr_t' ||
      month === 'aprt' ||
      month === 'apra' ||
      month === 'aprr'
    )
      mo = 'April';
    if (
      month === 'may' ||
      month === 'may_t' ||
      month === 'mayt' ||
      month === 'maya' ||
      month === 'mayr'
    )
      mo = 'May';
    if (
      month === 'jun' ||
      month === 'jun_t' ||
      month === 'junt' ||
      month === 'juna' ||
      month === 'junnr'
    )
      mo = 'June';
    if (
      month === 'jul' ||
      month === 'jul_t' ||
      month === 'jult' ||
      month === 'jula' ||
      month === 'julr'
    )
      mo = 'July';
    if (
      month === 'aug' ||
      month === 'aug_t' ||
      month === 'augt' ||
      month === 'auga' ||
      month === 'augr'
    )
      mo = 'August';
    if (
      month === 'sep' ||
      month === 'sep_t' ||
      month === 'sept' ||
      month === 'sepa' ||
      month === 'sepr'
    )
      mo = 'September';
    if (
      month === 'oct' ||
      month === 'oct_t' ||
      month === 'octt' ||
      month === 'octa' ||
      month === 'octr'
    )
      mo = 'October';
    if (
      month === 'nov' ||
      month === 'nov_t' ||
      month === 'novt' ||
      month === 'nova' ||
      month === 'novr'
    )
      mo = 'November';
    if (
      month === 'decm' ||
      month === 'dec_t' ||
      month === 'dect' ||
      month === 'deca' ||
      month === 'decr'
    )
      mo = 'December';
    var message = col + ' was updated to ' + value + ' in the month of ' + mo;
    if (beds == 4) {
      message = col + ' in ' + mun + ', ' + prov + ' was updated to ' + value;
    }
    if (beds == 41) {
      message =
        month + ' remarks of ' + col + ' was updated to "' + value + '"';
      beds = 4;
    }
    return this.http.post<any>(url, { mfo_id, pid, message, beds });
  }
}
