/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./logout.component";
import * as i2 from "./auth.service";
import * as i3 from "@angular/router";
var styles_LogoutComponent = [];
var RenderType_LogoutComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_LogoutComponent, data: {} });
export { RenderType_LogoutComponent as RenderType_LogoutComponent };
export function View_LogoutComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(1, 0, null, null, 4, "div", [["class", "col-md-8 col-md-offset-2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "button", [["class", "btn btn-danger"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLogout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" Logout "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], null, null); }
export function View_LogoutComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-logout", [], null, null, null, View_LogoutComponent_0, RenderType_LogoutComponent)), i0.ɵdid(1, 49152, null, 0, i1.LogoutComponent, [i2.AuthService, i3.Router], null, null)], null, null); }
var LogoutComponentNgFactory = i0.ɵccf("app-logout", i1.LogoutComponent, View_LogoutComponent_Host_0, {}, {}, []);
export { LogoutComponentNgFactory as LogoutComponentNgFactory };
