import { createAction, props } from "@ngrx/store";
import { AuthActionsEnum } from "./auth-actions.enum";

export const registerAction = createAction(
  AuthActionsEnum.REGISTER,
  props<{ username: string, email: string, password: string }>()
)