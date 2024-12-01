import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { StagesComponent } from './stages/stages.component';
import { AddstageComponent } from './addstage/addstage.component';

const routes: Routes = [
  { path: '', redirectTo: 'stages', pathMatch: 'full' },
  { path: 'stages', component: StagesComponent },
  { path: 'addstage', component: AddstageComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
