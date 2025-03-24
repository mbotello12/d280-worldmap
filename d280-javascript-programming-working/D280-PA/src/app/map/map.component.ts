import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MapService } from '../services/map.service';
import { Info } from '../model/info.type';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  mapService = inject(MapService)
  countryCode: string = '';
  countryName: string= '';
  countryCapital: string = '';
  countryRegion: string = '';
  income: string = '';
  latitude: string = '';
  longitude: string = '';

  
  @ViewChild('mySvg') mySvg: ElementRef | undefined;

  countryInfo(event: MouseEvent) {
    
    const targetElement = event.target as SVGElement;
    this.countryCode = targetElement.id;
    this.mapService.getCountryInfo(this.countryCode).subscribe((data) => {
      let countryInfo = Object.values(data)
      this.countryName = countryInfo[1][0].name
      this.countryCapital = `Country Capital: ${countryInfo[1][0].capitalCity}`
      this.countryRegion  = `Country Region: ${countryInfo[1][0].region.value}`
      this.income = `Income Level: ${countryInfo[1][0].incomeLevel.value}`
      this.latitude = `Latitude: ${countryInfo[1][0].latitude}`
      this.longitude  = `Longitude: ${countryInfo[1][0].longitude}`
    })
    
    
   
  }
}

