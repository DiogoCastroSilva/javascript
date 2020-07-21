import { Modal } from './UI/Modal';
import { Map } from './UI/Map';


class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    }

    selectPlace(coordinates) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert('Location feature is not available in your browser, please use a more recent browser.');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading location, please wait...');
        modal.show();

        navigator.geolocation.getCurrentPosition(successResult => {
            modal.hide();
            const coordinates = {
                lat: successResult.coords.latitude,
                lng: successResult.coords.longitude
            };

            console.log(coordinates);
            this.selectPlace(coordinates);
        }, () => {
            alert('Could not locate you, please enter a address manually.');
            modal.hide();
        });
    }

    findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector('input').value;
        if (!value || value.trim().length === 0) {
            alert('Invalid address!');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading location, please wait...');
        modal.show();
    }
}

new PlaceFinder();