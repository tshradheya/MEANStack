import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from'@angular/forms';

import{ LogoutComponent } from "./logout.component"
import{ SignInComponent } from "./signin.component"
import{ SignUpComponent } from "./signup.component"

import { authRouting } from "./auth.routes"

@NgModule({
    declarations: [
        LogoutComponent,
        SignUpComponent,
        SignInComponent,
    ],
    imports: [
        CommonModule, ReactiveFormsModule, authRouting
    ],
    providers: [

    ]
})
export class AuthModule {

}
