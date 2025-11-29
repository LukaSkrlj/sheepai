import {Component, inject} from '@angular/core';
import {InputText} from "primeng/inputtext";
import {Select} from "primeng/select";
import {Textarea} from "primeng/textarea";
import {FloatLabel} from "primeng/floatlabel";
import {FileUpload} from "@/file-upload/file-upload";
import {Chip} from "primeng/chip";
import {Country} from "@/country/country";
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {Checkbox} from "primeng/checkbox";
import {MultiSelect} from "primeng/multiselect";
import {Data} from "@/services/data";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs/operators";
import {Communication} from "@/communication/communication";

@Component({
    selector: 'app-add-topic',
    imports: [InputText, MultiSelect, Textarea, FloatLabel, FileUpload, Chip, Country, Button, FormsModule, Checkbox, Communication],
    templateUrl: './add-topic.html',
    styleUrl: './add-topic.scss'
})
export class AddTopic {
    keyword = '';
    website = '';
    keywords = [];
    websites = [];
    keyStrict = false;
    webStrict = false;
    #data = inject(Data);
    teams = toSignal(this.#data.loadData('teams'));
    users = toSignal(this.#data.loadData('users'));
    selectedTeams = [];
    selectedUsers = [];

    addKeyword() {
        this.keywords.push(this.keyword);
    }

    addWebsite() {
        this.websites.push(this.website);
    }

    removeKeyword(k) {
        this.keywords = this.keywords.filter((keyword) => keyword === k);
    }

    removeWebsite(k) {
        this.websites = this.websites.filter((keyword) => keyword === k);
    }
}
