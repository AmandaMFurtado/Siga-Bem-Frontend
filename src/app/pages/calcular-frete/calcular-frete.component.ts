import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FreteRequisicao } from 'src/app/models/frete-requisicao';
import { FreteResponse } from 'src/app/models/frete-response';
import { CalcularFreteService } from 'src/app/services/calcular-frete.service';

/**
 * Componente responsável por permitir aos usuários calcular o valor do frete de uma entrega.
 */
@Component({
  selector: 'app-calcular-frete',
  templateUrl: './calcular-frete.component.html',
  styleUrls: ['./calcular-frete.component.scss']
})


export class CalcularFreteComponent implements OnInit  {

/**
   * Representa os dados da requisição de cálculo de frete.
   */
freteRequisicao: FreteRequisicao = new FreteRequisicao();

/**
 * Representa a resposta do cálculo de frete ou qualquer valor.
 */
freteResposta: FreteResponse | any;

/**
 * Formulário para coletar informações necessárias para o cálculo de frete.
 */
freteForm: FormGroup | any;

/**
 * Lista de erros recebidos em resposta ao cálculo de frete.
 */
listaErros: any[] = [];

/**
 * Construtor do componente `CalcularFreteComponent`.
 *
 * @param sigaBemService Um serviço para calcular o frete.
 * @param formBuilder Um serviço para criar formulários reativos.
 */
constructor(private sigaBemService: CalcularFreteService, private formBuilder: FormBuilder) {}

  /**
   * Inicializa o componente, criando o formulário de cálculo de frete.
   */
  ngOnInit() {
    this.createFreteForm();
  }

  
  /**
   * Realiza o cálculo do frete com base nos dados fornecidos pelo usuário.
   */
  calcularFrete() {
   
    this.listaErros = [];
    this.freteRequisicao = this.freteForm.value;
  
    this.sigaBemService.calcularFrete(this.freteRequisicao).subscribe(
      (resposta) => {
        this.freteResposta = resposta;
       
      },
      (error) => {
        if (error.status === 404) {
          if (error.error instanceof Array) {
            this.listaErros = this.listaErros.concat(error.error);
          } else {
            this.listaErros.push(error.error);
          }
        }
      }
    );
  }
  

  /**
   * Cria o formulário de cálculo de frete com as validações necessárias.
   */
  createFreteForm() {
    this.freteForm = this.formBuilder.group({
      cepOrigem: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      cepDestino: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      nomeDestinatario: ['', Validators.required],
      peso: ['', Validators.required],
    });
  }

   /**
   * Fecha o alerta de erro exibido ao usuário.
   */
  fecharAlerta() {
    this.listaErros = [];
  }

}
