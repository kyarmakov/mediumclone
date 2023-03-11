import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../interfaces/auth-state.interface";
import { registerAction } from "./auth.actions";

const initialState: AuthState = {
  isSubmitting: false,
}

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthState => ({
    ...state,
    isSubmitting: true,
  }))
)