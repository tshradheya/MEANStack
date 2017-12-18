import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from'@angular/forms';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { MessageComponent } from "./messages/message.component"
import { MessagesComponent } from "./messages/messages.component"
import { MessageListComponent } from "./messages/message-list.component"
import { MessageInputComponent } from "./messages/message-input.component"
import { AuthenticationComponent } from "./auth/authentication.component"
import { routing } from "./app.routing"
import{ LogoutComponent } from "./auth/logout.component"
import{ SignInComponent } from "./auth/signin.component"
import{ SignUpComponent } from "./auth/signup.component"

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignUpComponent,
        SignInComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}
