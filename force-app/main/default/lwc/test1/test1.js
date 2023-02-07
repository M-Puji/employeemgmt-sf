import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'ram';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}