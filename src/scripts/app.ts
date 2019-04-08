import { Karrot, Hooks } from '@karrot/core';

export class App {

    constructor(public element: HTMLElement, public hooks: Hooks) {
    }

    public kOnInit(): void {
        const myForm = Karrot.get('my-form');

        myForm.addAction('formValidation.error', (capsule) => {
            // pass validation message error to logger
            console.log(capsule.message);
        });
    }
}
