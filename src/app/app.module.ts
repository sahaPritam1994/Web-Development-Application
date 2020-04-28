import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/core/header/header.component';
import { FeatureModuleModule } from './feature-module/feature-module.module';
import { FooterComponent } from '../app/core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
