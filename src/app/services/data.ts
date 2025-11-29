import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Data {
    #http = inject(HttpClient);
    loadData<T>(data: string): Observable<T> {
        return this.#http.get<T>(data + '.json');
    }
}
