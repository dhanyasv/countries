import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';
import { HomeComponent } from './components/home/home.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent,data:{header:false} },
  { path: 'countries/:name', component: CountryComponent,data:{header:false} },
  { path: '', component: HomeComponent,data:{header:true} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
