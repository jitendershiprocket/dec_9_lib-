import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwitcherComponent {
    constructor() {
        this.data = '';
        this.isModalOpen = false;
    }
    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }
}
SwitcherComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitcherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, ngImport: i0, template: `
    <button (click)="openModal()">Open Modal</button>
    <div *ngIf="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" (click)="closeModal()">&times;</span>
        <p>{{ data }}</p>
      </div>
    </div>
  `, isInline: true, styles: ["\n    .modal { display: block; position: fixed; /* Add styles for your modal */ }\n    .modal-content { /* Add styles for content */ }\n    .close { cursor: pointer; }\n  "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-switcher',
                    template: `
    <button (click)="openModal()">Open Modal</button>
    <div *ngIf="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" (click)="closeModal()">&times;</span>
        <p>{{ data }}</p>
      </div>
    </div>
  `,
                    styles: [`
    .modal { display: block; position: fixed; /* Add styles for your modal */ }
    .modal-content { /* Add styles for content */ }
    .close { cursor: pointer; }
  `]
                }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQW1CakQsTUFBTSxPQUFPLGlCQUFpQjtJQWpCOUI7UUFrQlcsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFHLEtBQUssQ0FBQztLQVNyQjtJQVBDLFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7OytHQVZVLGlCQUFpQjttR0FBakIsaUJBQWlCLDhFQWZsQjs7Ozs7Ozs7R0FRVDs0RkFPVSxpQkFBaUI7a0JBakI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7R0FJUixDQUFDO2lCQUNIOzhCQUVVLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIChjbGljayk9XCJvcGVuTW9kYWwoKVwiPk9wZW4gTW9kYWw8L2J1dHRvbj5cbiAgICA8ZGl2ICpuZ0lmPVwiaXNNb2RhbE9wZW5cIiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDxwPnt7IGRhdGEgfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5tb2RhbCB7IGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogZml4ZWQ7IC8qIEFkZCBzdHlsZXMgZm9yIHlvdXIgbW9kYWwgKi8gfVxuICAgIC5tb2RhbC1jb250ZW50IHsgLyogQWRkIHN0eWxlcyBmb3IgY29udGVudCAqLyB9XG4gICAgLmNsb3NlIHsgY3Vyc29yOiBwb2ludGVyOyB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogc3RyaW5nID0gJyc7XG4gIGlzTW9kYWxPcGVuID0gZmFsc2U7XG5cbiAgb3Blbk1vZGFsKCkge1xuICAgIHRoaXMuaXNNb2RhbE9wZW4gPSB0cnVlO1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmlzTW9kYWxPcGVuID0gZmFsc2U7XG4gIH1cbn0iXX0=