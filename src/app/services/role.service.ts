import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'customer' | 'shop_owner';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  public role$ = new BehaviorSubject<UserRole>('customer');

  constructor() { }

  public setRole(role: UserRole): void {
    this.role$.next(role);
  }

  public getRole(): UserRole {
    return this.role$.getValue();
  }
}
