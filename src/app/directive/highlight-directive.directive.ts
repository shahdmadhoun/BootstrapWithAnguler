import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit() {
    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   'backgroundColor',
    //   'red',
    // );
  }

  // @HostBinding('style.backgroundColor') bgColor;
  // @HostListener('mouseover') onMouseOver() {
  //   this.bgColor = 'blue'
  // }
  // }

//   @HostListener('mouseover', ['$event'])
//    onMouseEnter(event: any) {    
//     this.highlight('yellow');
// }

// @HostListener('mouseleave', ['$event'])
// onMouseLeave(event: any) {    
//  this.highlight('white');
// }
//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
// }

@HostListener('scroll', ['$event'])

  onScroll(event: any) {
    // do tracking
    // console.log('scrolled', event.target.scrollTop);
    // Listen to click events in the component
    let tracker = event.target;


    let limit = tracker.scrollHeight - tracker.clientHeight;
    // console.log(event.target.scrollTop, limit);
    if (event.target.scrollTop === limit) {
      alert('end reached');
    }
  }


}
