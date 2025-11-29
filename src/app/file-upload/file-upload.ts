import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Badge} from "primeng/badge";
import {Toast} from "primeng/toast";
import {FileUpload as F} from "primeng/fileupload";
import {ProgressBar} from "primeng/progressbar";
import {PrimeNG} from "primeng/config";
import {MessageService} from "primeng/api";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-file-upload',
    imports: [Button, Badge, Toast, F, ProgressBar, CommonModule],
    templateUrl: './file-upload.html',
    styleUrl: './file-upload.scss',
    providers: [MessageService]
})
export class FileUpload {
    files = [];

    totalSize : number = 0;

    totalSizePercent : number = 0;

    constructor(private config: PrimeNG, private messageService: MessageService) {}

    choose(event, callback) {
        callback();
    }

    onRemoveTemplatingFile(event, file, removeFileCallback, index) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

    onSelectedFiles(event) {
        this.files = event.currentFiles;
        this.files.forEach((file) => {
            this.totalSize += parseInt(this.formatSize(file.size));
        });
        this.totalSizePercent = this.totalSize / 10;
    }

    uploadEvent(callback) {
        callback();
    }

    formatSize(bytes) {
        const k = 1024;
        const dm = 3;
        const sizes = this.config.translation.fileSizeTypes;
        if (bytes === 0) {
            return `0 ${sizes[0]}`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return `${formattedSize} ${sizes[i]}`;
    }
}
