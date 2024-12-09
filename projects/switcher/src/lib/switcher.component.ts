import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-switcher',
  template: `<h6>Hello this is switcher library</h6>`,
  styles: [``]
})
export class SwitcherComponent implements OnInit {

  ngOnInit(): void {
    console.log("enter in oninit =====");
  }

}
