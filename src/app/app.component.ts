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
  constructor(private responsiveService:ResponsiveService){
  }
  ngOnInit(){
    this.responsiveService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        console.log('Mobile device detected');
        this.isMobile = true;
      }
      else{
        console.log('Desktop detected');
        this.isMobile = false;
      }
    });
    this.onResize();
  }

  onResize(){
    this.responsiveService.checkWidth();
  }
}
