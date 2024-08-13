class Projeto{
  fotos: String[] = [];
  linkGithub: String = '';
  linkWeb: String = '';
  descricao: String = '';
  nome: String = '';

  constructor(fotos: String[], linkGithub: String, linkWeb: String, descricao: String, nome: String){
    this.fotos = fotos;
    this.linkGithub = linkGithub;
    this.linkWeb = linkWeb;
    this.descricao = descricao;
    this.nome = nome;
  }
}

export default Projeto;