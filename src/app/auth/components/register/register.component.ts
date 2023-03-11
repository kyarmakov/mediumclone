import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { authIsSubmittingSelector } from "../../store/auth-selectors";
import { registerAction } from "../../store/auth.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private _fb: FormBuilder, private _store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
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
  }

  onSubmit(): void {
    this._store.dispatch(registerAction(this.form.value));
  }
}