import { Component } from '@angular/core';
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

@Component({
    selector: 'app-team-settings',
    imports: [InputText, Select, Textarea, FloatLabel, FileUpload, Chip, Country, Button, FormsModule, Checkbox],
    templateUrl: './team-settings.html',
    styleUrl: './team-settings.scss'
})
export class TeamSettings {
    keyword = '';
    website = '';
    keywords = [];
    websites = [];
    keyStrict = false;
    webStrict = false;

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
