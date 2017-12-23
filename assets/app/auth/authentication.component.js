import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-authenticate',
                    template: "\n    <header class=\"row spacing\">\n    <nav class=\"col-md-8 col-md-offset-2\">\n    <ul class=\"nav nav-tabs\">\n        <li routerLinkActive=\"active\"> <a [routerLink]=\"['signup']\">Sign Up</a> </li>\n        <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"> <a [routerLink]=\"['signin']\"> Sign In </a> </li>\n        <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\"> <a [routerLink]=\"['logout']\"> Log Out </a> </li>\n\n    </ul>\n    </nav>\n    </header>\n\n    <div class=\"row spacing\">\n        <router-outlet>\n        </router-outlet>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    AuthenticationComponent.ctorParameters = function () { return [
        { type: AuthService, },
    ]; };
    return AuthenticationComponent;
}());
export { AuthenticationComponent };
