import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})

export class ServerComponent {
  status: any;

  constructor() {
    Math.random() > 0.5 ? this.status = 'on-line' : this.status = 'off-line';
  }


  getStatus(){
    return Math.random() > 0.5 ? this.status ='on-line' : this.status ='off-line';
  }

  getColor(){
    return this.status === 'on-line' ? 'green' : 'red';
  }

}
