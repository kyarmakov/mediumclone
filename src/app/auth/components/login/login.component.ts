import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BackendErrors } from "src/app/shared/interfaces/backend-errors.interface";
import { LoginRequest } from "../../interfaces/login-request.interface";
import { loginAction } from "../../store/auth.actions";
import { authBackendErrorsSelector, authIsSubmittingSelector } from "../../store/auth.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  backendErrors$: Observable<BackendErrors | null>;
  isSubmitting$: Observable<boolean>;

  constructor(private _fb: FormBuilder, private _store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeListeners();
  }

  initializeForm(): void {
    this.form = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  initializeListeners(): void {
    this.backendErrors$ = this._store.select(authBackendErrorsSelector);
    this.isSubmitting$ = this._store.select(authIsSubmittingSelector);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const request: LoginRequest = {
      user: this.form.value,
    }
    
    this._store.dispatch(loginAction({ request }));
  }
}