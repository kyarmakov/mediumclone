import { BackendErrors } from "src/app/shared/interfaces/backend-errors.interface";
import { CurrentUser } from "src/app/shared/interfaces/current-user.interface";

export interface AuthState {
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  isLoading: boolean;
  currentUser: CurrentUser | null;
  errors: BackendErrors | null;
}