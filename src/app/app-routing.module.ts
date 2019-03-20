import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AdminGuard } from './_auth/admin.guard';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SelectFileComponent } from './manage-files/select-file/select-file.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { 
    path: 'signin', component: UserComponent,
    children: [{ path: '', component: SignInComponent}]
  },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'select-file', component: SelectFileComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
