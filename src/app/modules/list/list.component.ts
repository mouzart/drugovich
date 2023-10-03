import { Component, OnInit } from '@angular/core';
import { Client } from 'src/models/client';
import { MockapiService } from 'src/service/mockapi.service';
import { faUser, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  faUser = faUser;
  faPlus = faPlus;
  faEdit = faEdit;
  clients: Client[] = []
  clientSelected: Client = {
    name: '',
    cnpj: '',
    status: ''
  }
  constructor(private mockapi: MockapiService) { }

  ngOnInit() {
    this.mockapi.getClients().subscribe((clients) => {
      this.clients = clients
    })
  }

  clientSave(client: Client) {
    const index = this.clients.findIndex(c => c.cnpj === client.cnpj)
    if (index > 0) {
      this.clients[index] = client;
    } else {
      this.clients.push(client)
    }
  }

}
