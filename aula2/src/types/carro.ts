import { tpCambio, tpCarro, tpMarcha } from "./enum";

interface ICarro {
    tipo: tpCarro;
    placa: string;
    marca: string;
    modelo: string;
    cor: string;
    cambio: tpCambio;
    acelerar(intensidade: number): void;
    frear(intensidade: number): void;
    trocarMarcha(marcha: tpMarcha):void;
}

let carro: ICarro = {
    tipo: tpCarro.passeio,
    placa: 'HB25A',
    marca: 'Gol',
    modelo: 'Bola',
    cor: 'Preto',
    cambio: tpCambio.manual,
    acelerar(intensidade: number): void {
        if(intensidade <= 10) {
            console.log(`Seu veiculo acelerou moderadamente`);
        } else if(intensidade > 10 && intensidade <= 50) {
            console.log(`Aceleração forte`);
        } else if(intensidade > 50 && intensidade <= 100) {
            console.log(`Aceleração muito forte`);
        } else {
            console.log(`Aceleração inválida`);
        }
    },
    frear(intensidade: number): void {
        if(intensidade <= 10) {
            console.log(`Frenagem moderadamente`);
        } else if(intensidade > 10 && intensidade <= 50) {
            console.log(`Frenagem forte`);
        } else if(intensidade > 50 && intensidade <= 100) {
            console.log(`Frenagem muito forte`);
        } else {
            console.log(`Frenagem inválida`);
        }
    },
    trocarMarcha(marcha: number): void {
        console.log(`Troca de marcha: ${marcha}`);
    },
}

carro.acelerar(8);
carro.acelerar(45);
carro.acelerar(60);
carro.acelerar(500);

carro.frear(8);
carro.frear(45);
carro.frear(60);
carro.frear(500);

carro.trocarMarcha(tpMarcha.terceira);