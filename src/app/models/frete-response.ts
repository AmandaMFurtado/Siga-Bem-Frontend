/**
 * Interface que representa a resposta de cálculo de frete.
 */
export interface FreteResponse {
    /**
     * O valor total do frete em reais.
     */
    vlTotalFrete: number;
  
    /**
     * A data prevista de entrega no formato de string.
     */
    dataPrevistaEntrega: string;
  
    /**
     * O CEP de origem da entrega.
     */
    cepOrigem: string;
  
    /**
     * O CEP de destino da entrega.
     */
    cepDestino: string;
  }
  