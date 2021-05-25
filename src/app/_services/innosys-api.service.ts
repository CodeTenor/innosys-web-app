import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InnosysApiService {

  protected baseUri = 'https://localhost:44324/api';

  constructor(private http: HttpClient) { }

  getAllActivites() : Observable<any> {
    const allActivites = `${this.baseUri}/activity`;
    return this.http.get(allActivites);
  }

  getActivityById(id: string) : Observable<any> {
    const activityById = `${this.baseUri}/activity/{id}`;
    return this.http.get(activityById);
  }

  importActivityByCsv(formData: FormData) : Observable<any> {
    const uploadCsv = `${this.baseUri}/activity/`;
    return this.http.post(uploadCsv, formData);
  }

  exportActivityScript() : Observable<any> {
    const activityExport = `${this.baseUri}/activity/export`;
    return this.http.get(activityExport, { responseType: 'blob' });
  }
}
