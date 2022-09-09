import { ICepSearchResult } from "../types/cep";
import { api } from "./api";

export class BuscaCep { 
    public async getEnderecoCep(cep : string) : Promise<ICepSearchResult> { 
        try{ let comand : string = `common/getenderecocep?cep=${cep}`; 
        //console.log(‘comand:’ +comand); 
        return await api.get(comand).then((response): ICepSearchResult =>{ 
            let data = response.data; 
            if (data.hasOwnProperty('id')){ 
                if (data.id == -1) throw new Error(data.msg); 
                return { 
                    id: data.id,
                    cep: data.cep,
                    bairro: data.bairro,
                    complemento: data.complemento,
                    gia: data.gia,
                    ibge: data.ibge,
                    localidade: data.localidade,
                    logradouro: data.logradouro,
                    uf: data.uf,
                    siafi: data.siafi
                }; 
            }
        }); 
        } catch (e) { 
            throw e; 
        } 
    } 
}