import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BackendErrorMessagesModule } from "../shared/components/backend-error-messages/backend-error-messages.module";
import { PersistenceService } from "../shared/services/persistence.service";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthService } from "./services/auth.service";
import { AuthEffects } from "./store/auth.effects";
import { authReducer } from "./store/auth.reducer";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, 
    RouterModule.forChild(routes), 
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
  exports: [],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}