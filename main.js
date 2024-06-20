function Veiculo(marca, modelo, ano) {
    this.nome = marca;
    this.massa = modelo;
    this.ano = ano;
}

function Carro(marca, modelo, ano, portas) {
    Veiculo.call(this, marca, modelo, ano)
    this.portas = portas;
}

function moto(marca, modelo, ano, cilindradas) {
    Veiculo.call(this, marca, modelo, ano)
    this.cilindradas = cilindradas;
}

const carro1 = new Carro("Toyota", "Corolla", 2020, 4);
const moto1 = new moto("Honda", "CB500", 2021, 500);
const carro2 = new Carro("Volkswagen", "Golf", 2019, 4);

console.log(carro1);
console.log(moto1);
console.log(carro2);