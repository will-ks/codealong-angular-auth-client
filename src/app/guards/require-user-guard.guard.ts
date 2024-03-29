import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequireUserGuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Promise<any> {
    return this.authService
      .me()
      .then(user => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
      .catch(err => console.log(err));
  }
}
