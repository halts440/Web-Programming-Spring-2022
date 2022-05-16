import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @Input() msgFromParent = '';
  @Input() msgFromSibling = '';

  @Output() emitToParentC2 = new EventEmitter<string>();
  @Output() emitToParentForSiblingC1 = new EventEmitter<string>();

  sendDataToParent(value: string) {
    this.emitToParentC2.emit(value);
  }

  sendDataToParentForSibling(value: string) {
    this.emitToParentForSiblingC1.emit(value);
  }

}
