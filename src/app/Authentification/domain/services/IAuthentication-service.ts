export interface IAuthenticationService {
  authenticate(email: string, password: string): boolean;
}
