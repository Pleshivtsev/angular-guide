import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>,<app-server></app-server>`,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverName = '';
  userName = 'defaultUser';
  serverCreated = false;

  constructor() {

    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);

  }


  ngOnInit(): void {
  }

}
