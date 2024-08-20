import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MapboxGL {
  accessToken: string;
}

interface FeatureProperties {
  name: string;
  description: string;
  url: string;
}

const mapbox = mapboxgl as any as MapboxGL;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    this.setAccessToken(
      'pk.eyJ1IjoiazByb24iLCJhIjoiY2x2NmRraWp1MGJ6OTJtb2Y5NmRybThkMyJ9.v5oyKoLPsDNr5GLc42Ja5A'
    );

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [2.3522, 48.8566], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    map.on('load', () => {


      map.addSource('points-of-interest', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.3522, 48.8566], // coordenadas de la Torre Eiffel
              },
              properties: {
                name: 'Eiffel Tower',
                description: 'Un punto de referencia icónico en París',
                url: '/profile', // URL local de tu aplicación
              },
            },
          ],
        },
      });
    });
  }
  private setAccessToken(token: string) {
    mapbox.accessToken = token;
  }
}
