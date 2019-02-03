import { Injectable, Hooks } from "@karrot/core";

@Injectable()
export class Logger {
    private _logs: string[] = [];

    constructor(public readonly hooks: Hooks) {
    }

    public async doLog(message: string): Promise<void> {
        this._logs.push(message);
        console.log(message);

        await this.hooks.doAction('onLog', message);
    }
}
