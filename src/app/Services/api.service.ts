import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {APIURL} from './url.config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService{

  public url: string;

  constructor(private _http: Http){
        this.url = APIURL.url;
    }
    getFizzBuzz(number: number){

        console.log(`Entra en getBuzz: ${number}`)
        let headers = new Headers({
            'content-Type': 'application/json',
        })
        return this._http.get(`http://localhost:7070/api/v1/${number}`,{headers:headers});
      }
}
