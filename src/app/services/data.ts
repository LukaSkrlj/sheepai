import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class Data {
    #http = inject(HttpClient);
    loadData(data: string): Observable<any> {
        return this.#http.get(`${environment.url}/assets/${data}.json`);
    }
}
