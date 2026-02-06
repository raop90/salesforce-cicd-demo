import { LightningElement, wire, api } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';

export default class ProductList extends LightningElement {
    @api products;

    @wire(getRecords, {
        records: [
            {
                recordIds: ['a0123456789ABCDE'], // Replace with actual Product record Ids
                fields: ['Product__c.Id', 'Product__c.Name', 'Product__c.Price__c', 'Product__c.Image_URL__c']
            }
        ]
    })
    wiredProducts({ data, error }) {
        if (data) {
            this.products = data.results.map(record => record.result);
        } else if (error) {
            console.error('Error fetching products:', error);
        }
    }
}