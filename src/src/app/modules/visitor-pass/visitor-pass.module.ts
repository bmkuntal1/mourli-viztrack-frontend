import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FeatherModule } from 'angular-feather';
import { allIcons, Layout } from 'angular-feather/icons';


import { VisitorPassRoutingModule } from './visitor-pass-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutsModule } from 'src/app/_shared/layouts/layouts.module';
import { PagetitleComponent } from './../../_shared/components/pagetitle/pagetitle.component';

@NgModule({
  declarations: [
    DashboardComponent,
PagetitleComponent
  ],
  imports: [
    CommonModule,
    // WidgetModule,
    // CountToModule,
    // SharedModule,
    // NgApexchartsModule,
    VisitorPassRoutingModule,
    SimplebarAngularModule,
    //CarouselModule,
    FeatherModule.pick(allIcons),
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    // LightboxModule,
    // LeafletModule,
    //LayoutsModule
  ]
})
export class VisitorPassModule { }
