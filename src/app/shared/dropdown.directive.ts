import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  /** attribute selector requires square brackets */
  selector: '[appDropdown]',
})

/**
 * DropdownDirective
 * Fire the Bootstrap 3 dropdown by adding the "open" css class to the link element.
 */
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click', ['$event']) toggleOpen(e: Event) {
    this.isOpen = !this.isOpen;
    console.log(
      'dropdown.directive.ts @HostListener("click") this.isOpen: ',
      this.isOpen
    );
    console.log('event: ', e);
  }
}
