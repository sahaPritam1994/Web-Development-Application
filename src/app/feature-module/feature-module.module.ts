import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeographicLocationComponent } from './geographic-location/geographic-location.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WorkWithCompanyComponent } from './work-with-company/work-with-company.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { ComponentsComponent } from '../core/components/components.component';
import { FeatureModuleRouting } from './feature-module-routing.module';

@NgModule({
  declarations: [
    GeographicLocationComponent,
    TestimonialsComponent,
    WorkWithCompanyComponent,
    CompanyServicesComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleRouting
  ]
})
export class FeatureModuleModule { }
