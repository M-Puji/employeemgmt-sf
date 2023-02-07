import { LightningElement, track } from 'lwc';

export default class parentcomponent extends LightningElement {
     textVal = 0;
    passTochild(event){
        this.textVal = event.detail;
    }

}