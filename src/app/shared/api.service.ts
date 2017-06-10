import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class ApiService {
  title = 'Angular 2';
  constructor(private http: Http) {}

  create()
}
