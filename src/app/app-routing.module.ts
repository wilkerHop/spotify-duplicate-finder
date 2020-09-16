import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'panel', component: PanelComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
