import { Component, OnInit } from '@angular/core';

import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.page.html',
  styleUrls: ['./form-contato.page.scss'],
})
export class FormContatoPage implements OnInit {

  constructor(private service: ContatoService) { }

  nome: string;
  email: string;
  telefone: string;

  ngOnInit() {
  }

  enviarContato(){

    let contato = {};

    console.log("Nome: " + this.nome);
    console.log("Descrição: " + this.email);
    console.log("Descrição: " + this.telefone);

    contato['nome'] = this.nome;
    contato['email'] = this.email;
    contato['telefone'] = this.telefone;

    this.service.incluir(contato);
  }

}
