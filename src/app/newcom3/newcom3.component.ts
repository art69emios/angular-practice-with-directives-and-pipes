import { Component } from '@angular/core';

@Component({
  selector: 'app-newcom3',
  templateUrl: './newcom3.component.html',
  styleUrls: ['./newcom3.component.css']
})
export class Newcom3Component {
pipeText: string = 'newcom3 works!'
pipePi = Math.PI
pipeDate = new Date('1997-07-01')
pipeJson = {
  a:  32,
  b:'string',
  c:{
    d:23
  }
}
}
