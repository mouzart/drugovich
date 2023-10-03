import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSave, faUser } from '@fortawesome/free-solid-svg-icons';
import { Client } from 'src/models/client';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() set client(client: Client) {
    this.name.setValue(client.name);
    this.cnpj.setValue(client.cnpj);
    this.status.setValue(client.status);
    this.edit = client.cnpj.length > 0 ? true : false;
  };
  @Output() clientNew = new EventEmitter<Client>();

  faUser = faUser;
  faSave = faSave;
  clientForm: Client = new Client;
  edit: boolean = false;
  name = new FormControl('');
  cnpj = new FormControl('');
  status = new FormControl('');

  constructor() { }

  save() {
    this.clientForm = {
      name: this.name.value ?? '',
      cnpj: this.cnpj.value ?? '',
      status: this.status.value ?? ''
    }
    this.clientNew.emit(this.clientForm);
  }

}
