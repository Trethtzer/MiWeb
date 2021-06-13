import {Component} from '@angular/core';

@Component({
  selector: 'videojuegos',
  templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent{
  articlesVisibility : boolean[] =  [true // 1. THEA The awakening
  ];

  onChangeVisibility(position : number) {
    this.articlesVisibility[position - 1] = !this.articlesVisibility[position - 1];  
  }
}
