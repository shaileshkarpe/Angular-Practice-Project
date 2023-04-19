import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCheckNum]'
})
export class ChecknumDirective {

  constructor(private eRef: ElementRef) {}
  ngOnInit(): void {
    this.eRef.nativeElement.value = '+91';
  }
 @HostListener('keyup') onkeyup() {
    if (this.eRef.nativeElement.value.length == 13) {
      this.eRef.nativeElement.style.backgroundColor = 'green';
    } 
    else {
      this.eRef.nativeElement.style.backgroundColor = 'red';
    }
  }  
}



