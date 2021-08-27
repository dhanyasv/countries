import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { map,filter,mergeMap  } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  visibility:boolean=true;
  constructor(private router:Router,private activatedRoute:ActivatedRoute){
     
  }
  ngOnInit(){
    this.router.events.pipe(
      filter(events=>events instanceof NavigationEnd),
      map(evt =>this.activatedRoute),
      map(route => {
      while(route.firstChild) {
      route = route.firstChild;
      }
      return route;
      }))
      .pipe(
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
      ).subscribe((x) => {
      x.header===true ?this.visibility=true:this.visibility=false})
      }
    

}
