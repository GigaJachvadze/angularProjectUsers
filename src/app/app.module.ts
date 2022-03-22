import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackDropModule } from './shared/backDrop';
import { WidgetWrapperModule } from './widget-wrapper/widget-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetWrapperModule,
    HttpClientModule,
    BackDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
