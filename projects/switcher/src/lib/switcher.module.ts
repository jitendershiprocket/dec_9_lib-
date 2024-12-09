import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [CommonModule],
  exports: [SwitcherComponent] // Export the component for use in other modules
})
export class SwitcherModule {}
