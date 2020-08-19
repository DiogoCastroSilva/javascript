class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('custom element');
    }
}

customElements.define('custom-tooltip', Tooltip);