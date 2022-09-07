import { IMAGE_LOADER } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertController } from '@ionic/angular';

import {AlertData} from '../../../types'

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {
  public usuario: Usuario;
  public respuesta: string;

  constructor(
    private activatedRouted: ActivatedRoute
  , private router: Router,private alertCrl: AlertController) {

    this.activatedRouted.queryParams.subscribe(params => {       // Utilizamos expresión lambda
    if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras
      this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
    } else {
      this.router.navigate(['/ingreso']);
    }
    this.alertCrl = alertCrl
  });
}

  ngOnInit() {
  }

  async createAlert({head,subHead,msg,}:AlertData){
    return this.alertCrl.create({header:head,subHeader:subHead,message:msg});
  }

  public async validarRespuestaSecreta(): Promise<void> {
    if (this.usuario.respuestaSecreta === this.respuesta) {
      const alertInit = this.createAlert({head:'Recuperar contraseña',subHead:'',msg:`<h1>clave correcta la contraseña es : ${this.usuario.password}</h1> <img src='https://cdn.discordapp.com/attachments/885679078294831145/1016878771497881640/Hand-Emoji-PNG-Free-Download.png'/>`})
      await (await alertInit).present();
      
    }
    else {
      const alertInit = this.createAlert({head:'Recuperar contraseña',subHead:'',msg:`<h1>¡Lo sentimos pero los datos ingresado no son correctos!</h1> <img src='https://cdn.discordapp.com/attachments/885679078294831145/1016879100981432431/Cool-Emoji-With-Hand-PNG-Clipart.png'/>`})
      await (await alertInit).present();
    }
  }

  public inicioSesion(): void {
    this.router.navigate(['/ingreso']);
  }
}
