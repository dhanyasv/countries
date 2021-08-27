import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  providers:[CountryService],
  styleUrls: ['./countries.component.sass'],
})
export class CountriesComponent implements OnInit {
  error: any;
  countries;
  term:string = '';
  loading:boolean=true;
  constructor(private cService: CountryService) { }

  ngOnInit(): void {
    this.showCountries()
  }
  showCountries() {
    this.cService.getConfig()
      .subscribe(
        (data) => {
          this.loading = false;
          this.countries =data;
        }, // success path
        error => this.error = error // error path
      );
  }
  getCurrentTime(offset) {
    var d = new Date();
   
    // get UTC time in msec
    var utc = d.getTime();
   
    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));
   
    // return time as a string
    return "The local time is " + nd;
  }

}
