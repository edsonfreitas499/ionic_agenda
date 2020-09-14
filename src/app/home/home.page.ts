import { Component } from '@angular/core';
import { NavController  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController,
              private rota: ActivatedRoute) {}

  enviar(){
    console.log("Cheguei aqui");

    this.nav.navigateForward("form-tarefa");
    
    console.log("Continuo aqui.");
  }

  enviarCon(){
    this.nav.navigateForward("form-contato");
  }

  listarTarefa(){
    this.nav.navigateForward("tarefas");
  }

  listarContato(){
    this.nav.navigateForward("contatos");
  }
}
