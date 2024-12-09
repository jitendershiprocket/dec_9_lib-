import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { SwitcherComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7QUFFM0U7SUFBQTtRQWtCVyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0tBYXJCO0lBWEMscUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO21IQWRVLGlCQUFpQjt1R0FBakIsaUJBQWlCLG1HQWZsQixpUkFRVDs0QkFaSDtDQWtDQyxBQWhDRCxJQWdDQztTQWZZLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQWpCN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGlSQVFUO29CQUNELE1BQU0sRUFBRSxDQUFDLDZLQUlSLENBQUM7aUJBQ0g7OEJBRVUsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib3Blbk1vZGFsKClcIj5PcGVuIE1vZGFsPC9idXR0b24+XG4gICAgPGRpdiAqbmdJZj1cImlzTW9kYWxPcGVuXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8cD57eyBkYXRhIH19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAubW9kYWwgeyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGZpeGVkOyAvKiBBZGQgc3R5bGVzIGZvciB5b3VyIG1vZGFsICovIH1cbiAgICAubW9kYWwtY29udGVudCB7IC8qIEFkZCBzdHlsZXMgZm9yIGNvbnRlbnQgKi8gfVxuICAgIC5jbG9zZSB7IGN1cnNvcjogcG9pbnRlcjsgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZyA9ICcnO1xuICBpc01vZGFsT3BlbiA9IGZhbHNlO1xuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLmlzTW9kYWxPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5pc01vZGFsT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VzOicsIGNoYW5nZXMpO1xuICB9XG59XG4iXX0=