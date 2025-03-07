import { Directive, ElementRef, HostListener, output, inject } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  clickOutside = output();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.clickOutside.emit();
    }
  }
}
