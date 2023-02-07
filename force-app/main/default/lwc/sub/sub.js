import { LightningElement, track } from 'lwc';
import { subscribe, unsubscribe, createMessageContext, releaseMessageContext } from 'lightning/messageService';
import SAMPLE from "@salesforce/messageChannel/sampleMessage__c";

export default class Subscriber extends LightningElement {
    
    //@track myMessage = '';
    subscription = null;
    context = createMessageContext();
    @track receivedMessage = '';
    subscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLE, (message) => {
            this.displayMessage(message);
        });
     }
     unsubscribe() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    displayMessage(message) {
        this.receivedMessage = message ? JSON.stringify(message, null, '\t') : 'no message payload';
    }
    disconnectedCallback(){
        releaseMessageContext(this.context);
    }
    clearmsg(){
        this.receivedMessage='';
    }


}