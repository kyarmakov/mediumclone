import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../interfaces/auth-state.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction, loginAction, loginFailureAction, loginSuccessAction, registerAction, registerFailureAction, registerSuccessAction } from "./auth.actions";

const initialState: AuthState = {
  isSubmitting: false,
  isLoggedIn: null,
  isLoading: false,
  currentUser: null,
  errors: null,
}

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthState => ({
      ...state,
      isSubmitting: true,
      errors: null,
    })
  ),
  on(registerSuccessAction, (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(registerFailureAction, (state, action): AuthState => ({
    ...state,
    isSubmitting: false,
    errors: action.errors,
  })),
  on(loginAction, (state): AuthState => ({
    ...state,
    isSubmitting: true,
    errors: null,
  })),
  on(loginSuccessAction, (state, action): AuthState => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(loginFailureAction, (state, action): AuthState => ({
    ...state,
    isSubmitting: false,
    errors: action.errors,
  })),
  on(getCurrentUserAction, (state): AuthState => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccessAction, (state, action): AuthState => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(getCurrentUserFailureAction, (state): AuthState => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
  }))
)