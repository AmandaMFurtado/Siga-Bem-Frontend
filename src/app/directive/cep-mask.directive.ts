import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * Diretiva que aplica uma máscara a campos de entrada de CEP.
 */
@Directive({
  selector: '[appCepMask]'
})
export class CepMaskDirective {

   /**
   * Construtor do componente `FooterComponent`.
   * @param el Uma instância do ElementRef que fornece acesso ao elemento HTML associado ao componente.
   */
  constructor(private el: ElementRef) { }

   /**
   * Manipula o evento 'input' para aplicar uma máscara de CEP ao valor do campo de entrada.
   * @param event O evento de entrada associado à interação do usuário.
   */
  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length > 8) {
      event.target.value = value.slice(0, 8);
    } else {
      event.target.value = value.replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
    }
  }
}
