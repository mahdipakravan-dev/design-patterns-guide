import {Service} from "./service.type";

export class ApiModeProxy implements Service {

    constructor(private googleMapService : Service) {
    }

    findPlaceByLatLng(lat: number, lng: number): string {
        const isOnProduction = true;
        if(isOnProduction)
            return this.googleMapService.findPlaceByLatLng(lat, lng);
        else return null;
    }
}
