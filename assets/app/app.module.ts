import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { HttpModule } from "@angular/http"

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
import { AuthService } from "./auth/auth.service"
import { ErrorComponent } from "./errors/error.component"
import { ErrorService } from "./errors/error.service"

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
        SignInComponent,
        ErrorComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent],
})
export class AppModule {

}
