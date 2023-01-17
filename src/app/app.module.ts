import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiComponent } from './bmi/bmi.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BmiDetailsComponent } from './bmi-details/bmi-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BmiComponent,
    HeaderComponent,
    FooterComponent,
    BmiDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
