import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from '@businx/billing/core/core.module';
import { SharedModule } from '@businx/billing/shared/shared.module';

import { registerLocaleData } from '@angular/common';
import ptAo from '@angular/common/locales/pt-AO';
registerLocaleData(ptAo);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-AO'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
