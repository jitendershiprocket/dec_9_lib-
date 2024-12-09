import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class SwitcherService {
    constructor() { }
}
SwitcherService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SwitcherService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SwitcherComponent {
    constructor() {
        this.data = '';
        this.isModalOpen = false;
    }
    ngOnInit() {
        console.log("enter in oninit =====");
    }
    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }
}
SwitcherComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitcherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, ngImport: i0, template: "<button (click)=\"openModal()\" class=\"p-0 me-2 appSwitcherBtn\">\n  <div _ngcontent-afi-c47=\"\" class=\"appSwitcherTxt\"> ALL PRODUCTS <img apppathcorrection=\"\" data-src=\"assets/svg/apps.svg\" class=\"ml-2 position-relative w-15\" style=\"top: -1px;\" src=\"https://sidebar-lastmile-stage.kartrocket.com/assets/svg/apps.svg\">\n  </div>\n</button>\n  <div *ngIf=\"isModalOpen\" class=\"sr-modal\">\n    <div class=\"sr-modal-content\">\n      <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n      <p>{{ data }}</p>\n    </div>\n  </div>", styles: [".sr-modal{display:block;position:fixed}.close{cursor:pointer}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-switcher',
                    templateUrl: './switcher.component.html',
                    styleUrls: ['./switcher.component.scss']
                }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

class SwitcherModule {
}
SwitcherModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent], imports: [CommonModule], exports: [SwitcherComponent] });
SwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [CommonModule],
                    exports: [SwitcherComponent] // Export the component for use in other modules
                }]
        }] });

/*
 * Public API Surface of switcher
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SwitcherComponent, SwitcherModule, SwitcherService };
//# sourceMappingURL=shiprocket-switcher-lib.js.map
