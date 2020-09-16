import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.page.html',
  styleUrls: ['./form-contato.page.scss'],
})
export class FormContatoPage implements OnInit {

  constructor(private service: ContatoService,
              private nav : NavController,
              private rota: ActivatedRoute) { }

  nome: string;
  email: string;
  telefone: string;

  id = null;

  ngOnInit() {
    this.id = this.rota.snapshot.params['id'];
    this.nome = this.rota.snapshot.params['nome'];
    this.email = this.rota.snapshot.params['email'];
    this.telefone = this.rota.snapshot.params['telefone'];
  }

  enviarContato(){

    let contato = {};

    console.log("Nome: " + this.nome);
    console.log("Descrição: " + this.email);
    console.log("Descrição: " + this.telefone);

    contato['nome'] = this.nome;
    contato['email'] = this.email;
    contato['telefone'] = this.telefone;

    if(this.id == null){
      this.service.incluir(contato);
    }else{
      this.service.alterar(contato, this.id);
    }
    
    this.nav.navigateForward("contatos");
  }
}
