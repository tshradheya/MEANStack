import { Routes, RouterModule } from "@angular/router"

import{ SignInComponent } from "./signin.component.ts"
import{ SignUpComponent } from "./signup.component.ts"
import{ LogoutComponent } from "./logout.component.ts"


export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: "full"}
        { path: 'signup', component: SignUpComponent},
        { path: 'signin', component: SignInComponent},
        { path: 'logout', component: LogoutComponent},

]
