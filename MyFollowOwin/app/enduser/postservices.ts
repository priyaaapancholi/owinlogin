import {Injectable } from "@angular/core";
import {Http, HTTP_PROVIDERS, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
    constructor(private http: Http) {

        var creds = "str='testst'";
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        http.post('http://localhost:18937/apitest', creds, {
            headers: headers
        })
            .map(res => res.json())
            .subscribe(
            (res2) => {
                console.log('subsribe %o', res2)
            }
            );
    }

}



