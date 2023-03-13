import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../interfaces/auth-state.interface";

const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const authIsSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
)

export const authBackendErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.errors
)

export const authIsLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn
)

export const authCurrentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.currentUser
)

export const authIsAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn === false
)