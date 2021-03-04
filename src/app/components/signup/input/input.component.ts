import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  templateUrl: 'input.component.html',
  selector: 'app-input'
})
export class InputComponent implements OnInit {
  form: FormGroup;
  @Input()
  iconClass: string;
  @Input()
  name: string;
  @Input()
  placeholder: string;
  @Input()
  type: string;
  @Input()
  formSubmitted: boolean;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }
}
