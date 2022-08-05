import type { Dependency } from "./traits/dependency.js";

type Restorer = (selector:string, classname:string) => Element|null;

export class Controller {
    private dependency: Dependency
    private restore:Restorer
    constructor(depedency:Dependency, restore:Restorer) {
        this.dependency = depedency
        this.restore = restore;
    }
}