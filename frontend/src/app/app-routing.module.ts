import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { AdminComponent } from "./admin/admin.component"
import { UserComponent } from "./user/user.component"
import {UserDetailsComponent} from "./user-details/user-details.component"
import {AddNewUserComponent} from "./add-new-user/add-new-user.component"
import {AddNewTransformerComponent} from "./add-new-transformer/add-new-transformer.component"
import {PowerShedModeComponent} from "./power-shed-mode/power-shed-mode.component"


import {UserHeaderComponent} from "./user-header/user-header.component"
import {AdminHeaderComponent} from "./admin-header/admin-header.component"
import { from } from 'rxjs';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"user/home",component:UserComponent},
  {path:"user/details",component:UserDetailsComponent},
  {path:"admin",component:AdminComponent},
  {path:"admin/newUser",component:AddNewUserComponent},
  {path:"admin/powerShedMode",component:PowerShedModeComponent},
  {path:"admin/newTransformer",component:AddNewTransformerComponent},
  

  // Remove when done
  {path:"uheader",component:UserHeaderComponent},
  {path:"aheader",component:AdminHeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
