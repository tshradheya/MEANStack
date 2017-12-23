import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { User } from "./user.model";
var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('firstName', data.firstName);
            _this.router.navigateByUrl('/');
        }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    SignInComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    };
    SignInComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signin',
                    templateUrl: "./signin.component.html"
                },] },
    ];
    /** @nocollapse */
    SignInComponent.ctorParameters = function () { return [
        { type: AuthService, },
        { type: Router, },
    ]; };
    return SignInComponent;
}());
export { SignInComponent };
