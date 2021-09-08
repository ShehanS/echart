import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { DemoGraphComponent } from './demo-graph/demo-graph.component';
import { DemoGraphLayoutComponent } from './demo-graph-layout/demo-graph-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DemoGraphComponent,
    DemoGraphLayoutComponent,
    DemoGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
