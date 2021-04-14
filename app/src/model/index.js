import L from "leaflet"

class Model {
    async getVeiculos () {
        return
    }

    async getLinhas () {
        return
    }

    async getChegada () {
        return
    }

    async getMapa (idElement) {
        
        const ACCESS_TOKEN = `access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP}`;

        const map = L.map(idElement).setView([51.505, -0.09], 13);
        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?{accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: ACCESS_TOKEN
        }).addTo(map);
        
    }
}

export default Model;