import { IDBPDatabase, openDB } from "idb";
import { Bookmark } from "./traits/index.js";

export async function useKeeper(name:string, title:string) {
    const k = new Keeper(name, title)
    await k.start()
    return k
}
/* 
Interface for IndexedDB
must bootstrap with useKeeper()
 */
class Keeper {
    db_name:string
    db!:IDBPDatabase<Bookmark>
    version=1
    title:string
    constructor(db_name="Bookmarks", title:string) {
        this.title = title;
        this.db_name = db_name
    }
    async start() {
        const title = this.title 
        this.db = await openDB<Bookmark>(this.db_name, this.version, {
            upgrade(db) {
                //Based on BookmarkInterface
                const store = db.createObjectStore(title, {
                    keyPath: 'selector'
                })
            }
        })
    }
    async put(bm:Bookmark) {
        this.db.put(this.title, bm);
    }

    async remove(bm:Bookmark) {
        this.db.delete(this.title, bm.selector)
    }

    async getAll() {
        const bookmarks = await this.db.getAll("Test")
        console.log(bookmarks);
    }
}