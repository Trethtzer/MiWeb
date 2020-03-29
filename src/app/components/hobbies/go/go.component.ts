import {Component} from '@angular/core';

@Component({
  selector: 'go',
  templateUrl: './go.component.html'
})
export class GoComponent{

  articlesVisibility : boolean[] =  [true // 1. Baduk problems
                                    ];
  
  
  
  onChangeVisibility(position : number) {
    this.articlesVisibility[position - 1] = !this.articlesVisibility[position - 1];  
  }
}

