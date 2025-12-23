import { Component, HostBinding, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Makes control css like global because it use projection so it only effect to current
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
}
