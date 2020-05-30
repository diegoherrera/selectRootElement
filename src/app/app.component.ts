import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('contenedorPadre')
  private contenedorPadre: ElementRef;

  @ViewChild('contenedorHijo1')
  private contenedorHijo1: ElementRef;

  title = 'render2';
  constructor(private rendered: Renderer2) {     
  }

  onClickEvent() {
    let selector = this.rendered.selectRootElement(
      this.contenedorPadre.nativeElement);
    const texto = this.rendered.createText("Hola mundo");
    this.rendered.appendChild(selector, texto);
  }
}
