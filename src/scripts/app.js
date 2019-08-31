

import { Karrot, KarrotItem } from '@karrot/core';

// @ts-check
export class App {

    /**
     *Creates an instance of App.
     * @param {KarrotItem} item
     * @memberof App
     */
    constructor(item) { 
        this.element = item.element;
        this.hooks = item.hooks;
    }

    kOnInit() {
        const myForm = Karrot.get('my-form');

        myForm.hooks.addAction('formValidation.error', (capsule) => {
            // pass validation message error to logger
            console.log(capsule.message);
        });
    }
}
