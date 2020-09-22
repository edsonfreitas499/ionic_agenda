import { Component } from '@angular/core';
import { NavController  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: string;

  constructor(private nav: NavController,
              private rota: ActivatedRoute,
              private service: AutenticacaoService) {}

  ngOnInit(){
    this.service.detalhes().subscribe(res => {
      if(res !== null){
        this.usuario = res.email;
      } else{
        this.nav.navigateBack('');
      }
    }, err => {
      console.log(err);
    })
  }

  sair(){
    this.service.logout().then(res => {
      console.log(res);
      this.nav.navigateBack('');
    } ).catch(error => {
      console.log(error)
    })
  }

  enviar(){
    console.log("Cheguei aqui");

    this.nav.navigateForward("form-tarefa");
    
    console.log("Continuo aqui.");
  }

 
}
