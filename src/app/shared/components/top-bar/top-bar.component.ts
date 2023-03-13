import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { authCurrentUserSelector, authIsAnonymousSelector, authIsLoggedInSelector } from "src/app/auth/store/auth.selectors";
import { CurrentUser } from "../../interfaces/current-user.interface";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUser | null>;

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.isLoggedIn$ = this._store.select(authIsLoggedInSelector);
    this.currentUser$ = this._store.select(authCurrentUserSelector);
    this.isAnonymous$ = this._store.select(authIsAnonymousSelector);
  }
}