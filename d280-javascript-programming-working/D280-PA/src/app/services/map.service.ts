import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Info } from '../model/info.type';


@Injectable({
  providedIn: 'root'
})
export class MapService {
    http = inject(HttpClient)

    getCountryInfo(country: string) {
      const url = `https://api.worldbank.org/v2/country/${country}?format=json`
      return this.http.get<Array<Info>>(url)
    }
}
