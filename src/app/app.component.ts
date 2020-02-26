import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from './utils/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SilesBonilla';
  public isMobile: Boolean;
  public isTablet: Boolean;
  constructor(private responsiveService:ResponsiveService){
  }
  ngOnInit(){
    this.responsiveService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        console.log('Mobile device detected');
        this.isMobile = true;
      }
      else{
        console.log('Desktop detected?');
        this.isMobile = false;
      }
    });
    this.responsiveService.getTabletStatus().subscribe( isTablet =>{
      if(isTablet){
        console.log('Tablet device detected');
        this.isTablet = true;
      }
      else{
        console.log('Desktop detected?');
        this.isTablet = false;
      }
    });
    this.onResize();
  }

  onResize(){
    this.responsiveService.checkWidth();
  }
}
