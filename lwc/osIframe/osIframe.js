/*
** LWC to display an iFrame inside an OmniScript
** Developer: Aaron Dominguez - aaron.dominguez@salesforce.com
** Date: 28/07/2021
*/ 
import { LightningElement,track,api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';

export default class OsIframe extends OmniscriptBaseMixin(LightningElement) {
    
    @track 
    iframeUrl;
    @track 
    additionalInfo;
    @track
    iframeWidth = 600;
    @track
    iframeHeight = 400;

    @api
    get url() {
        return this.iframeUrl;
    }
    set url(val) {
        if (val === null) {
            console.log("No URL provided to Iframe");
            return    
        }
        this.iframeUrl = val;  
    }

    @api
    get info() {
        return this.additionalInfo;
    }
    set info(val) {
        if (val === null) {
            console.log("No Additional info provided to Iframe");
            return    
        }
        this.additionalInfo = val;  
    }

    @api
    get width() {
        return this.iframeWidth;
    }
    set width(val) {
        if (val === null) {
            console.log("No width provided to Iframe");
            return    
        }
        this.iframeWidth = val;  
    }

    @api
    get height() {
        return this.iframeHeight;
    }
    set height(val) {
        if (val === null) {
            console.log("No height provided to Iframe");
            return    
        }
        this.iframeHeight = val;  
    }

    connectedCallback() {
        console.log('connectedCallback');
    }

    renderedCallback() {
        console.log('renderedCallback');
    }
}