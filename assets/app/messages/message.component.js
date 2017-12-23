import { Component, Input } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.onDelete = function () {
        this.messageService.deleteMessage(this.message)
            .subscribe(function (result) { console.log(result); });
    };
    MessageComponent.prototype.onEdit = function () {
        this.messageService.editMessage(this.message);
    };
    MessageComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') === this.message.userId;
    };
    MessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message',
                    templateUrl: './message.component.html',
                    styles: ["\n        .author {\n            display: inline-block   ;\n            font-style: itaic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            font-style: right;\n            font-size: 12px;\n            width: 19%;\n        }\n        "
                    ]
                },] },
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    MessageComponent.propDecorators = {
        "message": [{ type: Input },],
    };
    return MessageComponent;
}());
export { MessageComponent };
