import { AfterContentInit, Component, ContentChild, ElementRef, ViewEncapsulation, afterNextRender, afterRender, contentChild, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Makes control css like global because it use projection so it only effect to current
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  label = input.required<string>();
  // private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('After render');
    });

    afterNextRender(() => {
      console.log('After next render');
    });
  }

  ngAfterContentInit(): void {
    console.log("AFTER CONTENT INIT");
    console.log(this.control());
  }

  onClick() {
    // console.log(this.el);
    console.log(this.control());
  }
}
