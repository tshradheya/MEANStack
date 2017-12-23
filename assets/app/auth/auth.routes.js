import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";
var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: "full" },
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent },
    { path: 'logout', component: LogoutComponent }
];
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
