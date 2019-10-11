

export class UtilsHelpers {
    private static instance: UtilsHelpers = new UtilsHelpers();

    public constructor() {}

    public static getInstance(): UtilsHelpers {
        return this.instance;
    }

    public getHelloWorld(): string {
        return 'Hello World from helpers';
    }
}