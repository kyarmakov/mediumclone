import { createAction, props } from "@ngrx/store";
import { BackendErrors } from "src/app/shared/interfaces/backend-errors.interface";
import { CurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { LoginRequest } from "../interfaces/login-request.interface";
import { RegisterRequest } from "../interfaces/register-request.interface";
import { AuthActionsEnum } from "./auth-actions.enum";

export const registerAction = createAction(
  AuthActionsEnum.REGISTER,
  props<{ request: RegisterRequest }>()
)

export const registerSuccessAction = createAction(
  AuthActionsEnum.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
)

export const registerFailureAction = createAction(
  AuthActionsEnum.REGISTER_FAILURE,
  props<{ errors: BackendErrors }>()
)

export const loginAction = createAction(
  AuthActionsEnum.LOGIN,
  props<{ request: LoginRequest }>()
)

export const loginSuccessAction = createAction(
  AuthActionsEnum.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUser }>()
)

export const loginFailureAction = createAction(
  AuthActionsEnum.LOGIN_FAILURE,
  props<{ errors: BackendErrors }>()
)

export const getCurrentUserAction = createAction(
  AuthActionsEnum.GET_CURRENT_USER,
)

export const getCurrentUserSuccessAction = createAction(
  AuthActionsEnum.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
)

export const getCurrentUserFailureAction = createAction(
  AuthActionsEnum.GET_CURRENT_USER_FAILURE,
)