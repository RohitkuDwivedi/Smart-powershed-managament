import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AddNewTransformerComponent } from './add-new-transformer/add-new-transformer.component';
import { PowerShedModeComponent } from './power-shed-mode/power-shed-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    SidebarComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    UserDetailsComponent,
    AddNewUserComponent,
    AddNewTransformerComponent,
    PowerShedModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
