import { ICepSearchResult } from "../types/cep";
import { api } from "./api";

export class BuscaCep { 
    public async getEnderecoCep(cep : string) : Promise<ICepSearchResult> { 
        try{ 
            let comand : string = `common/getenderecocep?cep=${cep}`; 
            let _ret : any = await api.get(comand);
            let data = _ret.data; 

            if (data.hasOwnProperty('id')) 
            if (data.id == -1) 
                throw new Error(data.msg); 

            let _retCep : ICepSearchResult = { 
                id: data.id,
                cep: data.cep,
                bairro: data.bairro,
                complemento: data.complemento,
                gia: data.gia,
                ddd: data.ddd,
                ibge: data.ibge,
                localidade: data.localidade,
                logradouro: data.logradouro,
                uf: data.uf,
                siafi: data.siafi
            };
            return _retCep; 
        } catch (e) { 
            throw e; 
        } 
    } 
}