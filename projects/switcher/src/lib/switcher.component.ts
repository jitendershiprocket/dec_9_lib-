import { Component, Input, OnInit } from '@angular/core';

@Component({
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
})
export class SwitcherComponent implements OnInit {
  @Input() data: string = '';
  isModalOpen = false;


  ngOnInit(): void {
    console.log("enter in oninit =====");
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
