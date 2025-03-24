import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main' },
    {
      path: 'main',
      component: MainComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/register']))
    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }