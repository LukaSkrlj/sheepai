import {Component, inject, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {Data} from "@/services/data";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{
    #data = inject(Data)
    ngOnInit() {
        this.#data.loadData<any>('example').subscribe(console.log)
    }
}
