import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string;
  senha: string;

  constructor(private nav: NavController,
    private service: AutenticacaoService) { }

  ngOnInit() {
  }
  
  registro(){
    let registro = {};
    registro['email'] = this.email;
    registro['senha'] = this.senha;

    this.service.cadastrarUsuario(registro).then(res => {
      this.nav.navigateForward('/login');
    }, err => {
      console.log(err);
    });
  }
}
