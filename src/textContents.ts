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
import { Component } from '@angular/core';
import { AppDataService, ApiDataService } from '@ng/cee-core';
import { Router, Event as NavigationEvent, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wfe-app';
  constructor(
    private router: Router,
    private appDataService: AppDataService,
    private apiDataService: ApiDataService,) {
    if (window.location.pathname === '/') {
      this.appDataService.removeAllAppData();
      this.apiDataService.removeAllApiData();
      // resetStores();
      // const storage = persistState();
      // storage.destroy(); // Stop sync the state
      // storage.clearStore(); // Clear the storage
      // storage.clearStore('app-data');
      window.sessionStorage.clear();
      this.router.navigateByUrl('/wfe/step/DEFAULT_STEP_ID', { skipLocationChange: true });


    }
  }
}
`;

export {
  appmodulets,
  appcomponenthtml,
  approutingmodulets,
  wferendercomponentts,
  wferendercomponenthtml,
  appcomponentts,
};
