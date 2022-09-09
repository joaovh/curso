export interface ICepSearchResult {
    cep: string;
    logradouro: string;
    complemento?: string |null;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    id: string;
  }