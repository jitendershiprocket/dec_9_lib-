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
        SwitcherComponent.prototype.openModal = function () {
            this.isModalOpen = true;
        };
        SwitcherComponent.prototype.closeModal = function () {
            this.isModalOpen = false;
        };
        return SwitcherComponent;
    }());
    SwitcherComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SwitcherComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, ngImport: i0__namespace, template: "\n    <button (click)=\"openModal()\">Open Modal</button>\n    <div *ngIf=\"isModalOpen\" class=\"modal\">\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n        <p>{{ data }}</p>\n      </div>\n    </div>\n  ", isInline: true, styles: ["\n    .modal { display: block; position: fixed; /* Add styles for your modal */ }\n    .modal-content { /* Add styles for content */ }\n    .close { cursor: pointer; }\n  "], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-switcher',
                        template: "\n    <button (click)=\"openModal()\">Open Modal</button>\n    <div *ngIf=\"isModalOpen\" class=\"modal\">\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n        <p>{{ data }}</p>\n      </div>\n    </div>\n  ",
                        styles: ["\n    .modal { display: block; position: fixed; /* Add styles for your modal */ }\n    .modal-content { /* Add styles for content */ }\n    .close { cursor: pointer; }\n  "]
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
