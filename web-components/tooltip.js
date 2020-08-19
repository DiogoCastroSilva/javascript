class Tooltip extends HTMLElement {
    constructor() {
        super();
        this.containerElement;
    }

    connectedCallback() {
        const iconElement = document.createElement('span');
        iconElement.textContent = ' (?)';

        iconElement.addEventListener('mouseenter', this._showTooltip.bind(this));
        iconElement.addEventListener('mouseleave', this._hideTooltip.bind(this));

        this.appendChild(iconElement);
    }

    _showTooltip() {
        this.containerElement = document.createElement('div');
        this.containerElement.textContent = 'This is the tooltip text';

        this.appendChild(this.containerElement);
    }

    _hideTooltip() {
        if (this.containerElement) {
            this.containerElement.remove();
        }
    }
}

customElements.define('custom-tooltip', Tooltip);