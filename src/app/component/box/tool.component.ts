import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent {

  @Input('compute-function')
  public compute_function: Function = null;
  @Input('reverse-compute-function')
  public reverse_compute_function: Function = null;
  @Input('auto-calculate')
  public auto_calculate: boolean = false;
  @Input('compute-title')
  public compute_title: string = null;
  @Input('reverse-compute-title')
  public reverse_compute_title: string = null;

  public value: string = null;
  public response: string = null;

  public compute() {
    if (this.compute_function === null || this.value === null || this.value === '') {
      this.response = null;
      return;
    }

    this.response = this.compute_function.call(this, this.value);
  }

  public reverseCompute() {
    if (this.reverse_compute_function === null || this.response === null || this.response === '') {
      this.value = null;
      return;
    }

    this.value = this.reverse_compute_function.call(this, this.response);
  }

  public get showResponse(): boolean {
    return this.response !== null || this.reverse_compute_function !== null;
  }

  public get showReverseCalculateButton(): boolean {
    return this.canReversible;
  }

  public get canReversible(): boolean {
    return this.reverse_compute_function !== null;
  }

  valueChanged() {
    if (this.auto_calculate) {
      this.compute();
    }
  }

  responseChanged() {
    if (this.auto_calculate) {
      if (this.canReversible) {
        this.reverseCompute();
      }
    }
  }
}
