class Tooltip extends HTMLElement {
    constructor() {
        super();
        this.containerElement;
        this.text;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 10
                }
            </style>
            <slot>Some default</slot>
            <span> (?)</span>
        `;
    }

    connectedCallback() {
        this.text = this.hasAttribute('text') ? this.getAttribute('text') : 'Tooltip text';

        const iconElement = this.shadowRoot.querySelector('span');

        iconElement.addEventListener('mouseenter', this._showTooltip.bind(this));
        iconElement.addEventListener('mouseleave', this._hideTooltip.bind(this));

        this.shadowRoot.appendChild(iconElement);
    }

    _showTooltip() {
        this.containerElement = document.createElement('div');
        this.containerElement.textContent = this.text;

        // design
        // this.containerElement.style.backgroundColor = 'black';
        // this.containerElement.style.color = 'white';
        // this.containerElement.style.position = 'absolute';
        // this.containerElement.style.zIndex = '10';

        this.shadowRoot.appendChild(this.containerElement);
        this.style.position = 'relative';
    }

    _hideTooltip() {
        if (this.containerElement) {
            this.shadowRoot.removeChild(this.containerElement);
        }
    }
}

customElements.define('custom-tooltip', Tooltip);