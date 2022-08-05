import { Bookmark } from "./index.js"
export interface Dependency {
    get:(k:string) => Bookmark|undefined
    set:(k:string, v:Bookmark) => Promise<void>
}