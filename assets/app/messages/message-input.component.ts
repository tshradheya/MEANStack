import { Component } from "@angular/core"

import { Message } from "./message.model"

@Component({
    selector: 'app-message-input',
    templateUrl: "./message-input.component.html",

})
export class MessageInputComponent {

    constructor(private messageService: MessageService) {}

    onSave(value: string){
        const message = new Message(value, 'Shraddy');
        this.messageService.addMessage(message);
        console.log(value);
    }
}
