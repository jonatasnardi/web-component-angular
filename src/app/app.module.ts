import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { GarantiasProvisionamentoComponent } from './garantias-provisionamento/garantias-provisionamento.component';

@NgModule({
  declarations: [
    GarantiasProvisionamentoComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [
    GarantiasProvisionamentoComponent,
  ]
})
export class AppModule {

  constructor(injector: Injector) {
    const btn = createCustomElement(GarantiasProvisionamentoComponent, { injector });
    customElements.define('mfe-gg-provisionamento', btn);
  }

  ngDoBootstrap() {};
}
