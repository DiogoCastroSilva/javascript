class Tooltip extends HTMLElement {
    constructor() {
        super();
        this.containerElement;
        this.text;
    }

    connectedCallback() {
        this.text = this.hasAttribute('text') ? this.getAttribute('text') : 'Tooltip text';

        const iconElement = document.createElement('span');
        iconElement.textContent = ' (?)';

        iconElement.addEventListener('mouseenter', this._showTooltip.bind(this));
        iconElement.addEventListener('mouseleave', this._hideTooltip.bind(this));

        this.appendChild(iconElement);
    }

    _showTooltip() {
        this.containerElement = document.createElement('div');
        this.containerElement.textContent = this.text;

        this.appendChild(this.containerElement);
    }

    _hideTooltip() {
        if (this.containerElement) {
            this.containerElement.remove();
        }
    }
}

customElements.define('custom-tooltip', Tooltip);