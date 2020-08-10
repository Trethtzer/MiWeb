import {Component} from '@angular/core';

@Component({
  selector: 'warhammer',
  templateUrl: './warhammer.component.html'
})
export class WarhammerComponent{
  articlesVisibility : boolean[] =  [true // 1. My first tyranids
    ];



  onChangeVisibility(position : number) {
  this.articlesVisibility[position] = !this.articlesVisibility[position];  
  }
}
