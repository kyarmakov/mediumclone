import { createAction, props } from "@ngrx/store";
import { RegisterRequest } from "../interfaces/register-request.interface";
import { AuthActionsEnum } from "./auth-actions.enum";

export const registerAction = createAction(
  AuthActionsEnum.REGISTER,
  props<{ request: RegisterRequest }>()
)