import { createAction, props } from "@ngrx/store";
import { CurrentUser } from "src/app/shared/interfaces/current-user.interface";
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
  AuthActionsEnum.REGISTER_FAILURE
)