import { Directive, output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  clickOutside = output('clickOutside', (emitter) => (event: MouseEvent) => {
    emitter.emit(event);
  });
}
