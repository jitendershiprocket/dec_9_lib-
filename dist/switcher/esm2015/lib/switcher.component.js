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
    ngOnChanges(changes) {
        console.log('Changes:', changes);
    }
}
SwitcherComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitcherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, usesOnChanges: true, ngImport: i0, template: `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7QUFtQjNFLE1BQU0sT0FBTyxpQkFBaUI7SUFqQjlCO1FBa0JXLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7S0FhckI7SUFYQyxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7OytHQWRVLGlCQUFpQjttR0FBakIsaUJBQWlCLG1HQWZsQjs7Ozs7Ozs7R0FRVDs0RkFPVSxpQkFBaUI7a0JBakI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7R0FJUixDQUFDO2lCQUNIOzhCQUVVLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3dpdGNoZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCI+T3BlbiBNb2RhbDwvYnV0dG9uPlxuICAgIDxkaXYgKm5nSWY9XCJpc01vZGFsT3BlblwiIGNsYXNzPVwibW9kYWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPHA+e3sgZGF0YSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLm1vZGFsIHsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBmaXhlZDsgLyogQWRkIHN0eWxlcyBmb3IgeW91ciBtb2RhbCAqLyB9XG4gICAgLm1vZGFsLWNvbnRlbnQgeyAvKiBBZGQgc3R5bGVzIGZvciBjb250ZW50ICovIH1cbiAgICAuY2xvc2UgeyBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkYXRhOiBzdHJpbmcgPSAnJztcbiAgaXNNb2RhbE9wZW4gPSBmYWxzZTtcblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5pc01vZGFsT3BlbiA9IHRydWU7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuaXNNb2RhbE9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlczonLCBjaGFuZ2VzKTtcbiAgfVxufVxuIl19