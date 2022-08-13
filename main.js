const jsonDados= require('./teste.json'); 
const dados = jsonDados.dados


function Gerador(codigo) {
  this.codigo = codigo;
  this.filtra = dados.filter((v) => v.cod === this.codigo);
  this.mostraCodigo = this.filtra.map((v) => v.cod);
  this.mostraDescri = this.filtra.map((v) => v.desc);
  this.formataDados = () => {
    if (this.filtra.length === 0) return "erro";
    return `Código do Produto: ${this.mostraCodigo}\nDescrição: ${this.mostraDescri}`;
  };
}
const valor = "AUT011";
const inicia = new Gerador(valor);
console.log(inicia.formataDados());
