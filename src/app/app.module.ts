import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AntivirusComponent } from './antivus/antivirus.component';

import { AppComponent } from './app.component';
import { RouteAntivirusService } from './service/route-antivirus.service';

@NgModule({
  declarations: [
    AppComponent,
    AntivirusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RouteAntivirusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
