class carro{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    imprimirDetalhes(){
        return
       `
       marca:${this.marca}
       modelo:${this.modelo}
       ano:${this.ano}
       `
    }
}
