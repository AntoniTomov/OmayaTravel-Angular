import { Component } from '@angular/core';

@Component({
  selector: 'app-form-honeypot',
  template: `
    <label class="form-honeypot" aria-hidden="true">
      Website
      <input type="text" name="website" autocomplete="off" tabindex="-1" />
    </label>
  `,
})
export class FormHoneypot {}
