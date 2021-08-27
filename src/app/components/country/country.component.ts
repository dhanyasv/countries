import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap,Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryService } from 'src/app/services/country.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  providers:[CountryService],
  styleUrls: ['./country.component.sass']
})
export class CountryComponent implements OnInit {
  country;
  error;
  loading:boolean = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cService: CountryService,
    private _location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //console.log(params.name)
      this.cService.getCountry(params.name)
      .subscribe(
        (data) => {
          this.loading = false;
          this.country =data;
        }, // success path
        error => this.error = error // error path
      );
    });
      
    
  }
  backClicked() {
    this._location.back();
  }

}
