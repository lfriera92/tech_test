import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {QueryModel} from "./models";

const API_URL = 'https://swapi.dev/api/';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) {
  }

  getCategories(): Observable<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    return this.http.get(API_URL, {headers: httpHeaders}).pipe();
  }

  getCategoryData(category: string): Observable<QueryModel> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    return this.http.get(API_URL + category, {headers: httpHeaders}).pipe(
      map((response: any) => {
        return response
      })
    );
  }

  getPersonPlanet(url: string): Observable<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    return this.http.get(url, {headers: httpHeaders}).pipe(
      map((response: any) => {
        return response
      })
    );
  }

  getDetails(subUrl: string): Observable<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    return this.http.get(API_URL + subUrl, {headers: httpHeaders}).pipe(
      map((response: any) => {
        return response
      })
    );
  }

  filterData(search: string, category: string): Observable<QueryModel> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    return this.http.get(API_URL + category + '/?search=' + search, {headers: httpHeaders}).pipe(
      map((response: any) => {
        return response
      })
    );
  }
}
