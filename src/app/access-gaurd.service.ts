import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataManagerService } from './data.service';

@Injectable()
export class AccessGuard implements CanActivate {
    constructor(private dataMngr: DataManagerService, private router: Router) {
        // this.dataMngr.loadUser();
    }

    canActivate(route: ActivatedRouteSnapshot): Promise<boolean> | boolean {
        const requiresAdmin = route.data.requiresAdmin || false;
        if (requiresAdmin) {
            // Check that the user is logged in...
            const user: any = this.dataMngr.load('user-data');
            if (user) {
                return true;
            } else {
                console.log('deny');
                this.router.navigateByUrl('admin/signin');
                return false;
            }
        } else {
            return true;
        }
    }
}
