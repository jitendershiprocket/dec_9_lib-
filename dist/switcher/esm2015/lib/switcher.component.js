import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwitcherComponent {
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
SwitcherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, ngImport: i0, template: `
  <button (click)="openModal()">Open Modal</button>
  <div *ngIf="isModalOpen" class="modal">
    <div class="modal-content">
      <span class="close" (click)="closeModal()">&times;</span>
      <p>{{ data }}</p>
    </div>
  </div>
`, isInline: true, styles: ["\n  .modal { display: block; position: fixed; /* Add styles for your modal */ }\n  .modal-content { /* Add styles for content */ }\n  .close { cursor: pointer; }\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]" }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQW1CekQsTUFBTSxPQUFPLGlCQUFpQjtJQWpCOUI7UUFrQlcsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFHLEtBQUssQ0FBQztLQWNyQjtJQVhDLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7OytHQWZVLGlCQUFpQjttR0FBakIsaUJBQWlCLDhFQWZsQjs7Ozs7Ozs7Q0FRWDs0RkFPWSxpQkFBaUI7a0JBakI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7Ozs7Ozs7O0NBUVg7b0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7Q0FJUixDQUFDO2lCQUNEOzhCQUVVLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3dpdGNoZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8YnV0dG9uIChjbGljayk9XCJvcGVuTW9kYWwoKVwiPk9wZW4gTW9kYWw8L2J1dHRvbj5cbiAgPGRpdiAqbmdJZj1cImlzTW9kYWxPcGVuXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8cD57eyBkYXRhIH19PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmAsXG5zdHlsZXM6IFtgXG4gIC5tb2RhbCB7IGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogZml4ZWQ7IC8qIEFkZCBzdHlsZXMgZm9yIHlvdXIgbW9kYWwgKi8gfVxuICAubW9kYWwtY29udGVudCB7IC8qIEFkZCBzdHlsZXMgZm9yIGNvbnRlbnQgKi8gfVxuICAuY2xvc2UgeyBjdXJzb3I6IHBvaW50ZXI7IH1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTogc3RyaW5nID0gJyc7XG4gIGlzTW9kYWxPcGVuID0gZmFsc2U7XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcImVudGVyIGluIG9uaW5pdCA9PT09PVwiKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLmlzTW9kYWxPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5pc01vZGFsT3BlbiA9IGZhbHNlO1xuICB9XG59XG4iXX0=