import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ContatoService } from '../services/contato.service';

import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.page.html',
  styleUrls: ['./form-contato.page.scss'],
})
export class FormContatoPage implements OnInit {

  constructor(private service: ContatoService,
              private nav : NavController,
              private rota: ActivatedRoute,
              private formulario: FormBuilder) { }

  nome: string;
  email: string;
  telefone: string;

  id = null;

  validacao: FormGroup;
  MensagemErro: string = '';

  ngOnInit() {
    this.id = this.rota.snapshot.params['id'];
    this.nome = this.rota.snapshot.params['nome'];
    this.email = this.rota.snapshot.params['email'];
    this.telefone = this.rota.snapshot.params['telefone'];

    //----------------------------------------//
    this.validacao = this.formulario.group({
      nome: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      telefone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))

    });
  }

  mensagem_validacao = {
    'email': [
      {type: 'required', message: 'E-mail é obrigatório'},
      {type: 'pattern', message: 'E-mail inválido'}
    ],
    'telefone': [
      {type: 'required', message: 'Telefone é obrigatória'},
      { type: 'minlength', 
        message: 'Telefone deve ter no mínimo oito caracteres'
      }
    ],
    'nome': [
      {type: 'required', message: 'Nome é obrigatória'},
      { type: 'minlength', 
        message: 'Nome deve ter no mínimo 10 caracteres'
      }
    ],
  };

  enviarContato(valor){

  //  let contato = {};

  //  console.log("Nome: " + this.nome);
  //  console.log("Descrição: " + this.email);
  //  console.log("Descrição: " + this.telefone);

  //  contato['nome'] = this.nome;
  //  contato['email'] = this.email;
  //  contato['telefone'] = this.telefone;

    if(this.id == null){
      this.service.incluir(valor);
    }else{
      this.service.alterar(valor, this.id);
    }
    
    this.nav.navigateForward("contatos");
  }
}
