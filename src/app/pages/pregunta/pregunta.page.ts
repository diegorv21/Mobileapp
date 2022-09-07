import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

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
  , private router: Router) {

    this.activatedRouted.queryParams.subscribe(params => {       // Utilizamos expresión lambda
    if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras
      this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
    } else {
      this.router.navigate(['/ingreso']);
    }
  });
}

  ngOnInit() {
  }

  public validarRespuestaSecreta(): void {
    if (this.usuario.respuestaSecreta === this.respuesta) {
      alert('CORRECTO TU CLAVE ES' + this.usuario.password);
    }
    else {
      alert('INCORRECTO');
    }

  }

}
