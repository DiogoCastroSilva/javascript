class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert('Location feature is not available in your browser, please use a more recent browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(successResult => {
            const coordinates = {
                lat: successResult.coords.latitude,
                lng: successResult.coords.longitude
            };

            console.log(coordinates);
        }, () => {
            alert('Could not locate you, please enter a address manually.');
        });
    }

    findAddressHandler() {}
}

new PlaceFinder();