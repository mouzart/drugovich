import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSave, faUser } from '@fortawesome/free-solid-svg-icons';
import { Client } from 'src/models/client';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() public client!: Client;
  @Output() clientNew = new EventEmitter<Client>();
  faUser = faUser;
  faSave = faSave;
  clientForm: Client = new Client;

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.clientNew.emit(this.client);
  }

}
