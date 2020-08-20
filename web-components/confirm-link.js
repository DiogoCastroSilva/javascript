class ConfirmLink extends HTMLAnchorElement {

    connectedCallback() {
        this.addEventListener('click', event => {
            if (!confirm('Do you really want to leave?')) {
                event.preventDefault();
            }
        });
    }
}

customElements.define('custom-confirm-link', ConfirmLink, { extends: 'a' });