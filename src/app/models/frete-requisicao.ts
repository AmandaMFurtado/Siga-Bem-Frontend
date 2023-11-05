/**
 * Classe que representa uma requisição de cálculo de frete.
 */
export class FreteRequisicao {
    /**
     * O peso do envio em quilogramas.
     */
    peso: number | undefined;
  
    /**
     * O CEP de origem da entrega.
     */
    cepOrigem: string | undefined;
  
    /**
     * O CEP de destino da entrega.
     */
    cepDestino: string | undefined;
  
    /**
     * O nome do destinatário da entrega.
     */
    nomeDestinatario: string | undefined;
  }