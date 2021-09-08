import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGraphLayoutComponent } from './demo-graph-layout/demo-graph-layout.component';


const routes: Routes = [
  {path:'demo', component: DemoGraphLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
