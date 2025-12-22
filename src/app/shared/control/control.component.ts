import { Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None // Makes control css like global because it use projection so it only effect to current
})
export class ControlComponent {
  label = input.required<string>();
}
