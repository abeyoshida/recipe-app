import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  /**
   * Attribute selector requires square brackets.
   * To enable the Bootstrap dropdown menu to work add the "appDropdown" directive as an attribute
   * to the html dropdown container element that holds the "dropdown" class assignment.
   */
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
