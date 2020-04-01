import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  absherUrl = 'http://3.209.71.115:5090/PredictionResultsAbsher';
  healthURL = 'http://3.209.71.115:5090/PredictionResultsHealth';
  housingURL = 'http://3.209.71.115:5090/PredictionResultsHousing';
  eduURL = 'http://3.209.71.115:5090/PredictionResultsEdu';
  constructor(private http: HttpClient) { }
  
  getAbsherData() {
    return this.http.get(this.absherUrl);
  }
  gethealthData() {
    return this.http.get(this.healthURL);
  }

  getHousingData() {
    return this.http.get(this.housingURL);
  }
  getEduData() {
    return this.http.get(this.eduURL);
  }
}
