import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiDetailsComponent } from './bmi-details/bmi-details.component';
import { BmiComponent } from './bmi/bmi.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: BmiComponent },
  { path: 'bmi-details', component: BmiDetailsComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
