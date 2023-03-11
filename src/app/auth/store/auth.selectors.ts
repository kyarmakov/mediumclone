import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../interfaces/auth-state.interface";

const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const authIsSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
)