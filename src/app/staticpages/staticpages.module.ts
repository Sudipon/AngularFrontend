import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    StaticpagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StaticpagesModule { }
