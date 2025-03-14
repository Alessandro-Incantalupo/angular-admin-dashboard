import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';

interface SignInForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in-template-driven',
  imports: [FormsModule, ButtonComponent],
  templateUrl: './sign-in-template-driven.component.html',
  styles: ``,
})
export default class SignInTemplateDrivenComponent {
  onSubmit(form: { value: SignInForm }) {
    console.log('Form Submitted:', form.value);
  }
}
