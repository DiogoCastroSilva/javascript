export class Modal {
    constructor(contentID, fallbackText) {
        this.fallbackText = fallbackText;
        this.element = document.getElementById(contentID);
        this.template = document.getElementById('modal-template');
    }

    show() {
        // Template - not supported in IE
        if ('content' in document.createElement('template')) {
            const modalElements = document.importNode(this.template.content, true);
            const contentElement = document.importNode(this.element.content, true);

            this.modalElement = modalElements.querySelector('.modal');
            this.backdropElement = modalElements.querySelector('.backdrop');
            
            this.modalElement.appendChild(contentElement);
            document.body.insertAdjacentElement('afterbegin', this.modalElement);
            document.body.insertAdjacentElement('afterbegin', this.backdropElement);
        } else {
            alert(this.fallbackText);
        }
    }

    hide() {
        if (this.modalElement) {
            document.body.removeChild(this.modalElement);
            document.body.removeChild(this.backdropElement);

            this.modalElement = null;
            this.backdropElement = null;
        }
    }
}