import { Component } from '@angular/core';

@Component({
  selector: 'app-newcom1',
  templateUrl: './newcom1.component.html',
  styleUrls: ['./newcom1.component.css']
})
export class Newcom1Component {

  arrayStr: string[] = ['newcom1','newcom2','newcom3','newcom4','newcom5','newcom6']

  textValue: string | null = null
  flag = true
  showText(e:any){
    let value = e.target 
    this.textValue = value.textContent
  }


}