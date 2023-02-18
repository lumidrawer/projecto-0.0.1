import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'Login', loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'Registration', loadChildren:()=>import('./pages/registration/registration.module').then(m=>m.RegistrationModule)
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'Login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
