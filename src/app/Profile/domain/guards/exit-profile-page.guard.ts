import { CanDeactivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfilePageComponent } from '../../ui/user-profile-page.component';

export interface OnExit {
  onExit: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

export const exitProfilePageGuard: CanDeactivateFn<UserProfilePageComponent> = (component) => {
  if (component && component.onExit) {
    return component.onExit();
  }
  return true;
};
