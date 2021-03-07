import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TabsComponent } from './tabs/tabs.component';


const routes: Routes = [
  {
    path:'',
    component: FormComponent
  },
  {
    path:'tabs',
    component: TabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
