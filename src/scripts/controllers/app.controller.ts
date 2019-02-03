import { FormValidationController } from '@karrot/common';
import { Controller, Item, Settings } from '@karrot/core';

import { Logger } from '../dependencies/logger';

@Controller({
    name: 'app',
})
export class AppController {

    // get child controller using @Item decorator
    @Item()
    public myForm: FormValidationController;

    // get depedencies using DI framework
    constructor(private logger: Logger, private settings: Settings) { }

    public kOnInit(): void {

        console.log(this.myForm);

        this.myForm.hooks.addAction('validationError', (capsule) => {
            // pass validation message error to logger
            this.logger.doLog(capsule.message);
        });

        // catch when logger do log
        this.logger.hooks.addAction('onLog', (message: string) => {
            console.log(message.split('').reverse().join(''));
        });
    }

}

    // tslint:disable:member-access
// tslint:disable:no-any
function color(value: string): any { // this is the decorator factory
    return (target: any) => { // this is the decorator
        target.color = value;
    };
}

class Asd {
    @color('red')
    myRak = {};

    constructor() {
        console.log(this.myRak);
    }
}
