
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DropDownService } from './service/drop-down.service';

@Injectable()
export class AppResolve implements Resolve<any> {
    constructor(private dropDownService: DropDownService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] {
        return this.dropDownService.getDropDown();
    }
}