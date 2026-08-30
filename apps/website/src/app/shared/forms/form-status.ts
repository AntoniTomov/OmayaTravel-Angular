import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-status',
  template: `
    @if (message()) {
      <p class="form-status" [class.form-status--error]="isError()">
        {{ message() }}
      </p>
    }
  `,
})
export class FormStatus {
  readonly message = input('');
  readonly isError = input(false);
}
