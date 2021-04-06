const appmodulets = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCeeCoreModule, ModalRendererComponent} from '@ng/cee-core';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCeeCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalRendererComponent],
})
export class AppModule { }
`;

const appcomponenthtml = `<router-outlet></router-outlet>`;

const approutingmodulets = `
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WfeRenderComponent } from './wfe-render/wfe-render.component';

const routes: Routes = [
  {
    path : 'wfe/step/:stepId',
    component: WfeRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`;

const wferendercomponentts = `
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from  '@angular/router';
import { CeeApiService, SharedEventsServiceService, EventResponseHandlerService } from '@ng/cee-core';
@Component({
  selector: 'app-wfe-render',
  templateUrl: './wfe-render.component.html',
  styleUrls: ['./wfe-render.component.scss']
})
export class WfeRenderComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,
    private ceeApiService: CeeApiService,
    private sharedEventService: SharedEventsServiceService,
    private eventResponseHandler: EventResponseHandlerService,) { }
  stepId:any = '';
  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>{
      this.stepId = param.stepId;
    });

    this.sharedEventService.eventHandlerEmitter.subscribe(res => {
      switch (res.handler) {

        default:
          console.log('default')
        break;
      }
    })

  }
}
`;

const wferendercomponenthtml = `<app-step-renderer [stepId]="stepId"></app-step-renderer>`;

const appcomponentts = `
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WfeStepComponent } from "./wfe-step/wfe-step.component";
import { WfeStepNotFoundComponent } from "./wfe-step-not-found/wfe-step-not-found.component";
import { WfeAccessDeniedComponent } from "./wfe-access-denied/wfe-access-denied.component";

const routes: Routes = [
  { path: '', redirectTo: 'DEFAULT_ROUTE', pathMatch: 'full' },
  {
    path: "wfe/step/404",
    component: WfeStepNotFoundComponent,
    pathMatch: "full",
  },
  {
    path: "wfe/step/403",
    component: WfeAccessDeniedComponent,
    pathMatch: "full",
  },
  { path: ":stepId", component: WfeStepComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled", // Add options right here
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}`;

export {
  appmodulets,
  appcomponenthtml,
  approutingmodulets,
  wferendercomponentts,
  wferendercomponenthtml,
  appcomponentts,
};
