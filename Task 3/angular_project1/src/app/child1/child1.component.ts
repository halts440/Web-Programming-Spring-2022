import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @Input() msgFromParent = '';
  @Input() msgFromSibling = '';

  @Output() emitToParentC1 = new EventEmitter<string>();
  @Output() emitToParentForSiblingC2 = new EventEmitter<string>();

  sendDataToParent(value: string) {
    this.emitToParentC1.emit(value);
  }

  sendDataToParentForSibling(value: string) {
    this.emitToParentForSiblingC2.emit(value);
  }

}
