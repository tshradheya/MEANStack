import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from "./logout.component";
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { authRouting } from "./auth.routes";
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LogoutComponent,
                        SignUpComponent,
                        SignInComponent,
                    ],
                    imports: [
                        CommonModule, ReactiveFormsModule, authRouting
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    AuthModule.ctorParameters = function () { return []; };
    return AuthModule;
}());
export { AuthModule };
