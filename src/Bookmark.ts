const template = `
<style>
:host {
    border-color: 2px solid green;
}
</style>
<slot></slot>
`

export const event = new CustomEvent("bookmark");


export class BookmarkList extends HTMLOListElement {
    constructor() {
        super()
    }

    onConnectedCallback() {

    }
}

export class Bookmark extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"});
    }

    
    onConnectedCallback() {
        this.dispatchEvent(event)
    }
}