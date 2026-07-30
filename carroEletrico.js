class carroEletrico extends carro{
    constructor(marca,modelo,ano,capacidadeBateria){
        super(marca,modelo,ano);
        this.capacidadeBateria = capacidadeBateria;

    }
    imprimirDetalhes(){
        return
        `
        marca:${this.marca}
        modelo:${this.modelo}
        ano:${this.ano}
        capacidade da Bateria:${this.capacidadeBateria} KWh
        `

    }
}
const carro1 = new carro(
    "toyota",
    "corolla",
    2022
);

const carro2 = new carroEletrico(
    "tesla",
    "model 3",
    2024,
    75
);
