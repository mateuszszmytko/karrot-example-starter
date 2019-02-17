

import { Karrot, Hooks } from '@karrot/core';

//@ts-check
export class App {

    /**
     *Creates an instance of App.
     * @param {HTMLElement} element
     * @param {Hooks} hooks
     * @memberof App
     */
    constructor(element, hooks) { 
        this.element = element;
        this.hooks = hooks;
    }

    kOnInit() {
        const myForm = Karrot.get('my-form');

        myForm.addAction('formValidation.error', (capsule) => {
            // pass validation message error to logger
            console.log(capsule.message);
        });
    }
}
