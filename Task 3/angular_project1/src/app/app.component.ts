import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project1';
  msgForChild = '';
  msgForChild1 = '';
  msgForChild2 = '';
  
  msgFromChild1 = '';
  msgFromChild2 = '';

  msgFromC1ToC2 = '';
  msgFromC2ToC1 = '';

  // set message which is to be displayed for child 1 on button click
  sendMsgToChild1() {
    this.msgForChild1 = this.msgForChild;
  }

  // set message which is to be displayed for child 2 on button click
  sendMsgToChild2() {
    this.msgForChild2 = this.msgForChild;
  }

  getMsgFromChild1(value: string) {
    this.msgFromChild1 = value;
  }

  getMsgFromChild2(value: string) {
    this.msgFromChild2 = value;
  }

  getMsgFromChild1ForChild2(value: string) {
    this.msgFromC1ToC2 = value;
  }

  getMsgFromChild2ForChild1(value: string) {
    this.msgFromC2ToC1 = value;
  }

}
