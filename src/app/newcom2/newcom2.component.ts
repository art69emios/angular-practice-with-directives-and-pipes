import { Component } from '@angular/core';

@Component({
  selector: 'app-newcom2',
  templateUrl: './newcom2.component.html',
  styleUrls: ['./newcom2.component.css']
})
export class Newcom2Component {
  flag = true

  textColor:string | null = null

 changeColor(e:any){
  let value = e.target
  this.textColor = value.id
 }

}
