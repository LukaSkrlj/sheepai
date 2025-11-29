import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {MultiSelect} from "primeng/multiselect";

@Component({
    selector: 'app-communication',
    imports: [Button, FormsModule, MultiSelect],
    templateUrl: './communication.html',
    styleUrl: './communication.scss'
})
export class Communication {
    communicationChannels: any[] = [
        { name: 'Slack', icon: 'pi pi-slack' },
        { name: 'Teams', icon: 'pi pi-microsoft' }, // Using 'pi-microsoft' as a common icon for Teams/MS services
        { name: 'Email', icon: 'pi pi-envelope' },
        { name: 'SMS', icon: 'pi pi-mobile' },
        { name: 'Telephone', icon: 'pi pi-phone' }
    ];

    // Model to hold the selected values (initialize as an empty array)
    selectedChannels: any[] = [{ name: 'Teams', icon: 'pi pi-microsoft' },{ name: 'Telephone', icon: 'pi pi-phone' }];
}
