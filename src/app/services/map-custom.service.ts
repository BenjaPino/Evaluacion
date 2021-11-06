import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Executor } from 'selenium-webdriver';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapCustomService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = -33.034376;
  lng =  -71.533631;
  zoom = 4;

  constructor() {this.mapbox.accessToken = environment.mapPk }
  buildMap(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat]
        });
        resolve({
          map: this.map
        });

      } catch (e) {
        reject(e);
      }
    });
  }
}
