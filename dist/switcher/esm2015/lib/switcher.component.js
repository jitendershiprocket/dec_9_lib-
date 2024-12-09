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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2l0Y2hlci9zcmMvbGliL3N3aXRjaGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU1XLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7S0FjckI7SUFYQyxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzsrR0FmVSxpQkFBaUI7bUdBQWpCLGlCQUFpQiw4RUNQOUIsK2lCQVNROzRGREZLLGlCQUFpQjtrQkFMN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsV0FBVyxFQUFFLDJCQUEyQjtvQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3pDOzhCQUVVLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2hlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTogc3RyaW5nID0gJyc7XG4gIGlzTW9kYWxPcGVuID0gZmFsc2U7XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcImVudGVyIGluIG9uaW5pdCA9PT09PVwiKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLmlzTW9kYWxPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5pc01vZGFsT3BlbiA9IGZhbHNlO1xuICB9XG59XG4iLCI8YnV0dG9uIChjbGljayk9XCJvcGVuTW9kYWwoKVwiIGNsYXNzPVwicC0wIG1lLTIgYXBwU3dpdGNoZXJCdG5cIj5cbiAgPGRpdiBfbmdjb250ZW50LWFmaS1jNDc9XCJcIiBjbGFzcz1cImFwcFN3aXRjaGVyVHh0XCI+IEFMTCBQUk9EVUNUUyA8aW1nIGFwcHBhdGhjb3JyZWN0aW9uPVwiXCIgZGF0YS1zcmM9XCJhc3NldHMvc3ZnL2FwcHMuc3ZnXCIgY2xhc3M9XCJtbC0yIHBvc2l0aW9uLXJlbGF0aXZlIHctMTVcIiBzdHlsZT1cInRvcDogLTFweDtcIiBzcmM9XCJodHRwczovL3NpZGViYXItbGFzdG1pbGUtc3RhZ2Uua2FydHJvY2tldC5jb20vYXNzZXRzL3N2Zy9hcHBzLnN2Z1wiPlxuICA8L2Rpdj5cbjwvYnV0dG9uPlxuICA8ZGl2ICpuZ0lmPVwiaXNNb2RhbE9wZW5cIiBjbGFzcz1cInNyLW1vZGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cInNyLW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgIDxwPnt7IGRhdGEgfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PiJdfQ==