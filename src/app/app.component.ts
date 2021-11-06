import { Component, OnInit } from '@angular/core';
import { MapCustomService } from './services/map-custom.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mapCustomService: MapCustomService) {}
  ngOnInit(): void {
    this.mapCustomService.buildMap()
      .then((data) => {
        console.log('TODO CORRECTO');
      })
      .catch((err) => {
        console.log('ERROR!!!!', err);
      });
  }
}
