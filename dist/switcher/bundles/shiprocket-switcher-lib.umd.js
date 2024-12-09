(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('shiprocket-switcher-lib', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["shiprocket-switcher-lib"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var SwitcherService = /** @class */ (function () {
        function SwitcherService() {
        }
        return SwitcherService;
    }());
    SwitcherService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SwitcherService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var SwitcherComponent = /** @class */ (function () {
        function SwitcherComponent() {
            this.data = '';
            this.isModalOpen = false;
        }
        SwitcherComponent.prototype.ngOnInit = function () {
            console.log("enter in oninit =====");
        };
        SwitcherComponent.prototype.openModal = function () {
            this.isModalOpen = true;
        };
        SwitcherComponent.prototype.closeModal = function () {
            this.isModalOpen = false;
        };
        return SwitcherComponent;
    }());
    SwitcherComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SwitcherComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, ngImport: i0__namespace, template: "<button (click)=\"openModal()\" class=\"p-0 me-2 appSwitcherBtn\">\n  <div _ngcontent-afi-c47=\"\" class=\"appSwitcherTxt\"> ALL PRODUCTS <img apppathcorrection=\"\" data-src=\"assets/svg/apps.svg\" class=\"ml-2 position-relative w-15\" style=\"top: -1px;\" src=\"https://sidebar-lastmile-stage.kartrocket.com/assets/svg/apps.svg\">\n  </div>\n</button>\n  <div *ngIf=\"isModalOpen\" class=\"sr-modal\">\n    <div class=\"sr-modal-content\">\n      <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n      <p>{{ data }}</p>\n    </div>\n  </div>", styles: [".sr-modal{display:block;position:fixed}.close{cursor:pointer}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-switcher',
                        templateUrl: './switcher.component.html',
                        styleUrls: ['./switcher.component.scss']
                    }]
            }], propDecorators: { data: [{
                    type: i0.Input
                }] } });

    var SwitcherModule = /** @class */ (function () {
        function SwitcherModule() {
        }
        return SwitcherModule;
    }());
    SwitcherModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SwitcherModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherModule, declarations: [SwitcherComponent], imports: [i1.CommonModule], exports: [SwitcherComponent] });
    SwitcherModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherModule, imports: [[i1.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SwitcherComponent],
                        imports: [i1.CommonModule],
                        exports: [SwitcherComponent] // Export the component for use in other modules
                    }]
            }] });

    /*
     * Public API Surface of switcher
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SwitcherComponent = SwitcherComponent;
    exports.SwitcherModule = SwitcherModule;
    exports.SwitcherService = SwitcherService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=shiprocket-switcher-lib.umd.js.map
