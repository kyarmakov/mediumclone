import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../interfaces/auth-state.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "./auth.actions";

const initialState: AuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  errors: null,
}

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(registerSuccessAction, (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(registerFailureAction, (state, action): AuthState => ({
    ...state,
    isSubmitting: false,
    errors: action.errors,
  }))
)