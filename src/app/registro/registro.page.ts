import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../services/autenticacao.service';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string;
  senha: string;

  
  validacao: FormGroup;
  MensagemErro: string = '';

  constructor(private nav: NavController,
    private service: AutenticacaoService,
    private formulario: FormBuilder) { }

    ngOnInit() {
      this.validacao = this.formulario.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        senha: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ]))
  
      });
  
    }
  
    mensagem_validacao = {
      'email': [
        {type: 'required', message: 'E-mail é obrigatório'},
        {type: 'pattern', message: 'E-mail inválido'}
      ],
      'senha': [
        {type: 'required', message: 'Senha é obrigatória'},
        { type: 'minlength', 
          message: 'Senha deve ter no mínimo seis caracteres'
        }
      ]
    };
  
  registro(valor){
   // let registro = {};
   // registro['email'] = this.email;
   // registro['senha'] = this.senha;

    this.service.cadastrarUsuario(valor).then(res => {
      this.nav.navigateForward('/login');
    }, err => {
      console.log(err);
    });
  }
}
