import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service"

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
        .author {
            display: inline-block;
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
    ],
})
export class AppComponent {

}
