import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Button, ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';
import { Select } from 'primeng/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Textarea } from 'primeng/textarea';
import { Checkbox } from 'primeng/checkbox';
import { WindowMaximizeIcon } from 'primeng/icons';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Button,
    Select,
    FormsModule,
    Textarea,
    Checkbox,
    ReactiveFormsModule,
    WindowMaximizeIcon,
    Ripple,
    ButtonDirective,
    ButtonIcon,
    ButtonLabel,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'admin-dashboard';
}
