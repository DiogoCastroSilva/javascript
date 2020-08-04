import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordFromAddress, simpleReverseGeocoding } from './Utility/Location';


class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
        this.shareBtn = document.getElementById('share-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
        this.shareBtn.addEventListener('click');
    }

    selectPlace(coordinates, address) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }
        this.shareBtn.disabled = false;
        const shareLinkInputElement = document.getElementById('share-link');
        shareLinkInputElement.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert('Location feature is not available in your browser, please use a more recent browser.');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading location, please wait...');
        modal.show();

        navigator.geolocation.getCurrentPosition(async successResult => {
            modal.hide();
            const coordinates = {
                lat: successResult.coords.latitude,
                lng: successResult.coords.longitude
            };
            const address = await simpleReverseGeocoding(coordinates.lng, coordinates.lat);
            this.selectPlace(coordinates, address);
        }, () => {
            alert('Could not locate you, please enter a address manually.');
            modal.hide();
        });
    }

    async findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector('input').value;
        if (!address || address.trim().length === 0) {
            alert('Invalid address!');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading location, please wait...');
        modal.show();

        try {
            const coordinates = await getCoordFromAddress(address);
            this.selectPlace(coordinates);
        } catch (e) {
            alert(e);
        } finally {
            modal.hide();
        }
        
    }
}

new PlaceFinder();