import { Karrot, KarrotItem } from '@karrot/core';

export class App {

    constructor(public item: KarrotItem<HTMLElement>) {
    }

    public kOnInit(): void {
        const myForm = Karrot.get('my-form');

        myForm.hooks.addAction('formValidation.error', (capsule) => {
            // pass validation message error to logger
            console.log(capsule.message);
        });
    }
}
