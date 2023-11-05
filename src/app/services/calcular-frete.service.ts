import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FreteRequisicao } from '../models/frete-requisicao';
import { FreteResponse } from '../models/frete-response';
import { Observable } from 'rxjs';

/**
 * Serviço responsável por lidar com o cálculo de frete e comunicação com a API.
 */
@Injectable({
  providedIn: 'root'
})
export class CalcularFreteService {

  /**
   * A URL base da API de cálculo de frete.
   */
  url: string = 'http://localhost:8080/sigabem'

  /**
   * Construtor do serviço `CalcularFreteService`.
   *
   * @param httpClient Uma instância do HttpClient usado para realizar requisições HTTP.
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Opções HTTP utilizadas nas requisições.
   */
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  /**
   * Realiza o cálculo do frete com base nos dados fornecidos.
   * @param freteRequisicao Os dados necessários para o cálculo do frete.
   * @returns Um Observable que emite a resposta do cálculo de frete.
   */
  calcularFrete(freteRequisicao: FreteRequisicao): Observable<FreteResponse> {
    return this.httpClient.post<FreteResponse>(`${this.url}`, freteRequisicao);
  }
}
