import { BackendErrors } from "src/app/shared/interfaces/backend-errors.interface";
import { CurrentUser } from "src/app/shared/interfaces/current-user.interface";

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean | null;
  errors: BackendErrors | null;
}