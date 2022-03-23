import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BiznewsComponent } from './biznews/biznews.component';
import { DigicellComponent } from './digicell/digicell.component'

const routes: Routes = [

  {path:'', component:TopheadingComponent},
  {path:'tech', component:TechnewsComponent},
  {path:'biz', component:BiznewsComponent},
  {path:'digi', component:DigicellComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
