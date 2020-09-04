import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.page.html',
  styleUrls: ['./form-contato.page.scss'],
})
export class FormContatoPage implements OnInit {

  constructor() { }

  nome: string;
  email: string;
  telefone: string;

  ngOnInit() {
  }

  enviarContato(){
    console.log("Nome: " + this.nome);
    console.log("Descrição: " + this.email);
    console.log("Descrição: " + this.telefone);
  }

}
