import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { authBackendErrorsSelector, authIsSubmittingSelector } from "../../store/auth.selectors";
import { registerAction } from "../../store/auth.actions";
import { RegisterRequest } from "../../interfaces/register-request.interface";
import { BackendErrors } from "src/app/shared/interfaces/backend-errors.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors | null>;

  constructor(private _fb: FormBuilder, private _store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this._fb.group({
      username: [''],
      email: [''],
      password: [''],
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this._store.select(authIsSubmittingSelector);
    this.backendErrors$ = this._store.select(authBackendErrorsSelector);
  }

  onSubmit(): void {
    const request: RegisterRequest = {
      user: this.form.value,
    }
    this._store.dispatch(registerAction({ request }));
  }
}