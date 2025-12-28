import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, output, viewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  host: {
    class: 'control'
  }
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form'); // this returns the signal
  // @Output() add = new EventEmitter<{title: string; text: string;}>();
  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; text: string; }>();

  ngOnInit() {
    console.log("ON INIT");
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    // console.log(this.form()?.nativeElement);
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    // this.form()?.nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
