import {Component} from '@angular/core';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html'
})
export class LanguagesComponent{

  articlesVisibility : boolean[] =  [true // 1. 101 korean
  ];

  onChangeVisibility(position : number) {
    this.articlesVisibility[position - 1] = !this.articlesVisibility[position - 1];  
  }
}
