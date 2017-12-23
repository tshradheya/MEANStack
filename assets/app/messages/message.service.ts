import { Injectable, EventEmitter } from "@angular/core"
import { Http, Response, Headers } from "@angular/http"
import 'rxjs/Rx';
import { Observable } from "rxjs"

import { Message } from "./message.model"
import { ErrorService } from "../errors/error.service"


@Injectable()
export class MessageService {
    messages:  Message[] = [

    ];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http : Http, private errorService: ErrorService) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ''
        return this.http.post('http://sports-chat.herokuapp.com/message' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                console.log(result.obj.user)
                const newMessage = new Message(result.obj.content, localStorage.getItem('firstName'), result.obj._id, localStorage.getItem('userId'))
                this.messages.push(newMessage);
                return newMessage;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    getMessages() {
        return this.http.get('http://sports-chat.herokuapp.com/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[]= [];
                for(let message of messages) {
                    transformedMessages.push(new Message(message.content, message.user.firstName,  message._id, message.user._id))
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ''
        return this.http.delete('http://sports-chat.herokuapp.com/message/' + message.messageId +  token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message)
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ''
        return this.http.patch('http://sports-chat.herokuapp.com/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
}
