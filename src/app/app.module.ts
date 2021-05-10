import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BustonComponent } from './buston/buston.component';

@NgModule({
  declarations: [
    BustonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [
    BustonComponent,
  ]
})
export class AppModule {

  constructor(injector: Injector) {
    const btn = createCustomElement(BustonComponent, { injector });
    customElements.define('custom-button', btn);
  }

  ngDoBootstrap() {};
}
