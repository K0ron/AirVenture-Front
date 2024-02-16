import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
})
export class MapComponent implements OnInit {
  private map!: google.maps.Map;

  ngOnInit() {
    const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
    const zoom = 14;
    const url = 'https://maps.googleapis.com/maps/api/staticmap';

    // @ts-ignore google.maps.plugins
    const loader = new Loader({
      apiKey: 'YOUR_API_KEY',
      version: 'weekly',
    });

    document.addEventListener('DOMContentLoaded', () => {
      const wrapper = document.getElementById('wrapper') as HTMLButtonElement;

      wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=YOUR_API_KEY)`;

      wrapper.addEventListener('click', () => {
        wrapper.remove();

        loader.load().then(() => {
          this.map = new google.maps.Map(
            document.getElementById('map') as HTMLElement,
            {
              center,
              zoom,
            }
          );
        });
      });
    });
  }
}
