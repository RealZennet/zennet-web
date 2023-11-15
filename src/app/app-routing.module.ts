import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ZtruckingComponent } from './core/pages/ztrucking/ztrucking.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "ztrucking",
    component: ZtruckingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
