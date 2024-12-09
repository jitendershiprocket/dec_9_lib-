import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
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
