import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { NivelEducacional } from 'src/app/model/NivelEducacional';
import { Persona } from 'src/app/model/Persona';
import { Animation, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('titulo', { read: ElementRef, static: true}) titulo: ElementRef;


  public usuario: Usuario;


  constructor(
    private activeroute: ActivatedRoute
  , private router: Router
  , private alertController: AlertController
  , private animationController: AnimationController) {

// Se llama a la ruta activa y se obtienen sus parámetros mediante una subscripcion
this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
  if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras

    // Si tiene datos extra, se rescatan y se asignan a una propiedad
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

  } else {
    /*
      Si no vienen datos extra desde la página anterior, quiere decir que el usuario
      intentó entrar directamente a la página home sin pasar por el login,
      de modo que el sistema debe enviarlo al login para que inicie sesión.
    */
    this.router.navigate(['/login']);
  }
});
}

public ngOnInit(): void {
  // this.persona.nombre = 'Cristián';
  // this.persona.apellido = 'Gómez';
  // this.persona.nivelEducacional.id = 6;
  // this.persona.fechaNacimiento = '1972-12-26';
  }
  public ngAfterViewInit(): void {
    const animation = this.animationController
      .create()
      .addElement(this.titulo.nativeElement)
      .iterations(Infinity)
      .duration(6000)
      .fromTo('transform', 'translate(0%)', 'translate(100%)')
      .fromTo('opacity', 0.2, 1);

    animation.play();
  }
  public animateItem(elementRef: any) {
    this.animationController
      .create()
      .addElement(elementRef)
      .iterations(1)
      .duration(600)
      .fromTo('transform', 'translate(100%)', 'translate(0%)')
      .play();
  }
}
