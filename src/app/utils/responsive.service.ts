import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ResponsiveService {
    private isMobile = new Subject();
    private isTablet = new Subject();
    public screenWidth: string;


    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    onTabletChange(status: boolean) {
        this.isTablet.next(status);
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    getTabletStatus(): Observable<any> {
        return this.isTablet.asObservable();
    }

    public checkWidth() {
        var width = window.innerWidth;
        if (width <= 800) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
            this.onTabletChange(false);
        } else if (width <= 1000) {
            this.screenWidth = 'dm';
            this.onMobileChange(false);
            this.onTabletChange(true);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
            this.onTabletChange(false);
        }
    }
}
