import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Message } from "./message.model";
import { ErrorService } from "../errors/error.service";
var MessageService = /** @class */ (function () {
    function MessageService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.messages = [];
        this.messageIsEdit = new EventEmitter();
    }
    MessageService.prototype.addMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('https://sports-chat.herokuapp.com/message' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            console.log(result.obj.user);
            var newMessage = new Message(result.obj.content, localStorage.getItem('firstName'), result.obj._id, localStorage.getItem('userId'));
            _this.messages.push(newMessage);
            return newMessage;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.getMessages = function () {
        var _this = this;
        return this.http.get('https://sports-chat.herokuapp.com/message')
            .map(function (response) {
            var messages = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
            }
            _this.messages = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.deleteMessage = function (message) {
        var _this = this;
        this.messages.splice(this.messages.indexOf(message), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete('https://sports-chat.herokuapp.com/message/' + message.messageId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    MessageService.prototype.updateMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch('https://sports-chat.herokuapp.com/message/' + message.messageId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessageService.ctorParameters = function () { return [
        { type: Http, },
        { type: ErrorService, },
    ]; };
    return MessageService;
}());
export { MessageService };
