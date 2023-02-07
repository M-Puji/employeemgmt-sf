import { LightningElement ,track} from 'lwc';
import { publish, createMessageContext, releaseMessageContext } from 'lightning/messageService';
import SAMPLE from "@salesforce/messageChannel/sampleMessage__c";


export default class Publisher extends LightningElement {
    context = createMessageContext();
    @track myMessage = '';
    handleChange(event) {
        this.myMessage = event.target.value;
    }
    publishMC() {
        const message = {
            messageToSend: this.myMessage,
            sourceSystem: "From LWC"
        };
        publish(this.context, SAMPLE, message);
    }
    disconnectedCallback(){
        releaseMessageContext(this.context);
    }

}