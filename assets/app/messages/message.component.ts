import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
    styles: [`
        .author {
            display: inline-block   ;
            font-style: itaic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            font-style: right;
            font-size: 12px;
            width: 19%;
        }
        `
})
export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {}

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }

    onEdit() {
        this.editClicked.emit('Warning! You will edit the chat message')
    }
}
