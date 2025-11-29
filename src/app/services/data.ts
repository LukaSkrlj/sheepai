import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class Data {
    #http = inject(HttpClient);
    loadData<T>(data: string): Observable<T> {
        return this.#http.get<T>(`${environment.url}/assets/${data}.json`);
    }
}
