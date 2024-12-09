import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

var SwitcherService = /** @class */ (function () {
    function SwitcherService() {
    }
    SwitcherService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    SwitcherService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherService, providedIn: 'root' });
    return SwitcherService;
}());
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherService, decorators: [{
            type: Injectable,
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
    SwitcherComponent.prototype.ngOnChanges = function (changes) {
        console.log('Changes:', changes);
    };
    SwitcherComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    SwitcherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, usesOnChanges: true, ngImport: i0, template: "\n    <button (click)=\"openModal()\">Open Modal</button>\n    <div *ngIf=\"isModalOpen\" class=\"modal\">\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n        <p>{{ data }}</p>\n      </div>\n    </div>\n  ", isInline: true, styles: [".modal{display:block;position:fixed}.close{cursor:pointer}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    return SwitcherComponent;
}());
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-switcher',
                    template: "\n    <button (click)=\"openModal()\">Open Modal</button>\n    <div *ngIf=\"isModalOpen\" class=\"modal\">\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n        <p>{{ data }}</p>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .modal { display: block; position: fixed; /* Add styles for your modal */ }\n    .modal-content { /* Add styles for content */ }\n    .close { cursor: pointer; }\n  "]
                }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

var SwitcherModule = /** @class */ (function () {
    function SwitcherModule() {
    }
    SwitcherModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    SwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent], imports: [CommonModule], exports: [SwitcherComponent] });
    SwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, imports: [[CommonModule]] });
    return SwitcherModule;
}());
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [CommonModule],
                    exports: [SwitcherComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

/*
 * Public API Surface of switcher
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SwitcherComponent, SwitcherModule, SwitcherService };
//# sourceMappingURL=shiprocket-switcher-lib.mjs.map
