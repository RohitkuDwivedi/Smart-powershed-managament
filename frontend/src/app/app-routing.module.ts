import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { AdminComponent } from "./admin/admin.component"
import { UserComponent } from "./user/user.component"
import {UserDetailsComponent} from "./user-details/user-details.component"

import {UserHeaderComponent} from "./user-header/user-header.component"
import {AdminHeaderComponent} from "./admin-header/admin-header.component"

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"user/home",component:UserComponent},
  {path:"user/details",component:UserDetailsComponent},
  
  {path:"uheader",component:UserHeaderComponent},
  {path:"aheader",component:AdminHeaderComponent},
  {path:"admin",component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
