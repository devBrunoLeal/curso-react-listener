import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})

export class VideosService {
public videos: any = [];
public baseUrl: string = "https://sgapucminasbr-my.sharepoint.com/personal/1234072_sga_pucminas_br/Documents/2.1%20-%20GoStack%20Bootcamp%2011/"
public video: BehaviorSubject<any> = new BehaviorSubject({});
public localChecked: any;


constructor(private http: HttpClient){

}




 getVideos(){


  this.videos = [

  ]

  this.makeArray();



  for(let i = 0;i < this.videos.length; i++){

    let auxLink = this.videos[i].link
    this.videos[i].id = i;

    if(this.videos[i].id <= 5){
      var cont;
      this.videos[i].pastaRaiz = '1 - Preparando os Estudos'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 5 && this.videos[i].id <= 7) {
      this.videos[i].pastaRaiz = '2 - Ambiente de Desenvolvimento'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "1 - Node e Yarn"
    }
    if(this.videos[i].id > 7 && this.videos[i].id <= 10) {
       var cont;
      this.videos[i].pastaRaiz = '2 - Ambiente de Desenvolvimento'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "2 - Escrita de Codigo"
    }
    if(this.videos[i].id > 10 && this.videos[i].id <= 12) {
      this.videos[i].pastaRaiz = '2 - Ambiente de Desenvolvimento'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "3 - Git e Github"
    }
    if(this.videos[i].id > 12 && this.videos[i].id <= 15) {
      this.videos[i].pastaRaiz = '2 - Ambiente de Desenvolvimento'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "4 - Extensoes"
    }
    if(this.videos[i].id > 15 && this.videos[i].id <= 19) {
      this.videos[i].pastaRaiz = '2 - Ambiente de Desenvolvimento'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "5 - Ferramentas"
    }
    if(this.videos[i].id > 19 && this.videos[i].id <= 19) {
      this.videos[i].pastaRaiz = '2 - Ambiente de Desenvolvimento'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "5 - Ferramentas"
    }
    if(this.videos[i].id > 19 && this.videos[i].id <= 28) {
      this.videos[i].pastaRaiz = '3 - Back-end com Node.js'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 28 && this.videos[i].id <= 38) {
      this.videos[i].pastaRaiz = '4 - Front-end com ReactJS'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 38 && this.videos[i].id <= 45) {
      this.videos[i].pastaRaiz = '5 - Mobile com React Native'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 45 && this.videos[i].id <= 49) {
      this.videos[i].pastaRaiz = '6 - TypeScript'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 49 && this.videos[i].id <= 55) {
      this.videos[i].pastaRaiz = '7 - Primeiro Projeto com NodeJS - Parte 1 - Estrutura e padrões'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "1 - Estrutura e padrões"
    }
    if(this.videos[i].id > 55 && this.videos[i].id <= 63) {
      this.videos[i].pastaRaiz = '8 - Iniciando o Back-End do App - Parte 1 - Banco de Dados'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 63 && this.videos[i].id <= 67) {
      this.videos[i].pastaRaiz = '8 - Iniciando o Back-End do App - Parte 2 - Cadastro de Usuários'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 67 && this.videos[i].id <= 71) {
      this.videos[i].pastaRaiz = '8 - Iniciando o Back-End do App - Parte 3 - Autenticação'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 71 && this.videos[i].id <= 74) {
      this.videos[i].pastaRaiz = '8 - Iniciando o Back-End do App - Parte 4 - Upload de Imagens'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 74 && this.videos[i].id <= 76) {
      this.videos[i].pastaRaiz = '8 - Iniciando o Back-End do App - Parte 5 - Tratando Exceções'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 76 && this.videos[i].id <= 80) {
      this.videos[i].pastaRaiz = '9 - Primeiro Projeto com React - Parte 1 - Estrutura e Padrões'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 80 && this.videos[i].id <= 89) {
      this.videos[i].pastaRaiz = '9 - Primeiro Projeto com React - Parte 2 - Criando a Aplicação'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = null
    }
    if(this.videos[i].id > 89 && this.videos[i].id <= 100) {
      this.videos[i].pastaRaiz = '10 - Iniciando Front-End Web'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "Parte 1 - Estrutura das Páginas"
    }
    if(this.videos[i].id > 100 && this.videos[i].id <= 106) {
      this.videos[i].pastaRaiz = '10 - Iniciando Front-End Web'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "Parte 2 - Autenticação"
    }
    if(this.videos[i].id > 106 && this.videos[i].id <= 110) {
      this.videos[i].pastaRaiz = '10 - Iniciando Front-End Web'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "Parte 3 - Mensagens de Toast"
    }
    if(this.videos[i].id > 110 && this.videos[i].id <= 113) {
      this.videos[i].pastaRaiz = '10 - Iniciando Front-End Web'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "Parte 4 - Rotas da Aplicação"
    }
    if(this.videos[i].id > 113 && this.videos[i].id <= 119) {
      this.videos[i].pastaRaiz = '11 - Iniciando o Aplicativo Mobile'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "1 - Estrutura e Padrões"
    }
    if(this.videos[i].id > 119 && this.videos[i].id <= 126) {
      this.videos[i].pastaRaiz = '11 - Iniciando o Aplicativo Mobile'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "2 - Autenticação e Cadastro"
    }
    if(this.videos[i].id > 126 && this.videos[i].id <= 129) {
      this.videos[i].pastaRaiz = '11 - Iniciando o Aplicativo Mobile'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "3 - Conectando com a API"
    }
    if(this.videos[i].id > 129 && this.videos[i].id <= 140) {
      this.videos[i].pastaRaiz = '12 - Arquitetura e Testes no Node'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "1 - Arquitetura e DDD"
    }
    if(this.videos[i].id > 140 && this.videos[i].id <= 151) {
      this.videos[i].pastaRaiz = '12 - Arquitetura e Testes no Node'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "2 - Testes e TDD"
    }
    if(this.videos[i].id > 151 && this.videos[i].id <= 152) {
      this.videos[i].pastaRaiz = '13 - Continuando o Back-End do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "1 - Estrutura e Ajustes (1 - Aula)"
    }
    if(this.videos[i].id > 152 && this.videos[i].id <= 163) {
      this.videos[i].pastaRaiz = '13 - Continuando o Back-End do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "2 - Perfil do Usuário (11 aulas)"
    }
    if(this.videos[i].id > 163 && this.videos[i].id <= 171) {
      this.videos[i].pastaRaiz = '13 - Continuando o Back-End do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "3 - Agendamento (8 aulas)"
    }
    if(this.videos[i].id > 171 && this.videos[i].id <= 176) {
      this.videos[i].pastaRaiz = '14 - Finalizando o Back-End do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "1 - Prestador de Serviços (5 aulas)"
    }
    if(this.videos[i].id > 176 && this.videos[i].id <= 182) {
      this.videos[i].pastaRaiz = '14 - Finalizando o Back-End do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "2 - Personalizando para Produção (6 aulas)"
    }
    if(this.videos[i].id > 182 && this.videos[i].id <= 188) {
      this.videos[i].pastaRaiz = '14 - Finalizando o Back-End do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "3 - Cache e Segurança (6 aulas)"
    }
    if(this.videos[i].id > 188 && this.videos[i].id <= 195) {
      this.videos[i].pastaRaiz = '15 - Finalizando Front-Web do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "1 - Ajustes na API (7 aulas)"
    }
    if(this.videos[i].id > 195 && this.videos[i].id <= 199) {
      this.videos[i].pastaRaiz = '15 - Finalizando Front-Web do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "2 - Recuperação de Senha (4 aulas)"
    }
    if(this.videos[i].id > 199 && this.videos[i].id <= 207) {
      this.videos[i].pastaRaiz = '15 - Finalizando Front-Web do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "3 - Dashboard (8 aulas)"
    }
    if(this.videos[i].id > 207 && this.videos[i].id <= 210) {
      this.videos[i].pastaRaiz = '15 - Finalizando Front-Web do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "3 - Perfil do Usuário (3 aulas)"
    }
    if(this.videos[i].id > 210 && this.videos[i].id <= 214) {
      this.videos[i].pastaRaiz = '16 - Finalizando Front-End Mobile do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "1 - Ajustes na API (4 aulas)"
    }
    if(this.videos[i].id > 214 && this.videos[i].id <= 217) {
      this.videos[i].pastaRaiz = '16 - Finalizando Front-End Mobile do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "2 - Dashboard (3 aulas)"
    }
    if(this.videos[i].id > 217 && this.videos[i].id <= 225) {
      this.videos[i].pastaRaiz = '16 - Finalizando Front-End Mobile do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "3 - Agendamento (8 aulas)"
    }
    if(this.videos[i].id > 225 && this.videos[i].id <= 227) {
      this.videos[i].pastaRaiz = '16 - Finalizando Front-End Mobile do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "4 - Sucesso (2 aulas)"
    }
    if(this.videos[i].id > 227 && this.videos[i].id <= 230) {
      this.videos[i].pastaRaiz = '16 - Finalizando Front-End Mobile do App'
      this.videos[i].titulo = this.getTitulos(i);
      this.videos[i].pastaSeguinte = "5 - Perfil (3 aulas)"
    }




    if(this.videos[i].pastaSeguinte == null){
    auxLink = this.baseUrl+this.videos[i].pastaRaiz+'/'+this.videos[i].titulo+'.mp4?App=OneDriveWebVideo'
    }
      else
    {
    auxLink = this.baseUrl+this.videos[i].pastaRaiz+'/'+this.videos[i].pastaSeguinte+'/'+this.videos[i].titulo+'.mp4?App=OneDriveWebVideo'

    }




    auxLink.replace(' ','%20')

    this.videos[i].link = auxLink;




  }

  this.localChecked = JSON.parse(window.localStorage.getItem('checked'));


  if(this.localChecked != null){
    for(let i=0; i <= this.localChecked.id; i++){

      this.videos[i].view = this.localChecked.status
    }
  }

   return this.videos;

  }

  getTitulos(num){
   let string;

    string = '1 - Aquecendo os Motores.mp42 - Tecnicas de Aprendizado.mp43 - Fixando o Conhecimento.mp44 - Obtendo resultados na Carreira.mp45 - Projetos Pessoais.mp46 - Cronograma.mp41 - Instalando o Node.mp42 - Instalando o Yarn.mp41 - Visual Studio Code.mp42 - Configuracoes do Editor.mp43 - Terminal Oh My Zsh.mp41 - Instalando Git e Github.mp42 - Configuracoes Git.mp41 - JSON Viewer.mp42 - React Dev Tools.mp43 - Octotree.mp41 - Notion.mp42 - Whimsical.mp43 - DevDocs.mp44 - Insomnia.mp41 - Conceitos NodeJS.mp42 - Conceitos API REST.mp43 - Criando Projeto Node.mp44 - Configurando Nodemon.mp45 - Metodos HTTP.mp46 - Utilizando o Insomnia.mp47 - Tipos de Parametros.mp48 - Aplicacao Funcional.mp49 - Middlewares.mp41- Conceitos do ReactJS.mp42 - Configurando o Babel.mp43 - Configurando o Webpack.mp44 - Componetização.mp45 - Propriedades.mp46 - Estado e Imutabilidade.mp47 - Importando CSS e Imagens.mp48 - Listando Projetos da API.mp49 - Cadastrando Projetos.mp4Tem desafio!.mp41 - Arquitetura do React Native.mp42 - Configurando o SDK.mp43 - Criando um Novo Projeto.mp44 - Diferenças do ReactJS.mp45 - Listando Projetos da API.mp46 - Criando Novos Projetos.mp4Tem desafio!.mp41 - Porque Typescript.mp42 - Configurando o Projeto.mp43 - Quando Adicionar Tipos.mp44 - Tipando Objetos e Vetores.mp41 - Configurando Estrutura.mp42 - EditorConfig.mp43 - ESLint.mp44 - Importando Arquivos TS.mp45 - Prettier.mp46 - Debugando o NodeJS.mp41 - Estratégias de Abstração.mp42 - Conceitos Docker.mp43 - Instalando o Docker - Arquivo TXT.mp44 - Criando Containier do Banco.mp45 - Configurando TypeORM.mp46 - Criando Tabela Agendamentos.mp47 - Criando Model de Agendamento.mp48 - Reposítório TypeORM.mp41 - Model e Migration de Usuários.mp42 - Relacionamento nos Models.mp43 - Criação de Registros.mp44 - Criptografia de Senhas.mp41 - Autenticação.mp42 - Validando Credenciais.mp43 - Gerando Token JWT.mp44 - Rotas Autenticadas.mp41 - Upload de Arquivos.mp42 - Atualizando Avatar.mp43 - Servindo Arquivos Estáticos.mp41 - Criando Classe de Erro.mp42 - Lidando com Erros.mp41 - Criando Projeto.mp42 - EditorConfig.mp43 - ESLint.mp44 - Estrutura e Padräes.mp41 - Criando Rotas.mp42 - Utilizando Styled Components.mp43 - Estilizando Dashboard.mp44 - Conectando a API.mp45 - Lidando com Erros.mp46 - Salvando no LocalStorage.mp47 - Navegação entre Rotas.mp48 - Estilizando Detalhe.mp49 - Listando Issues da Api.mp41 - Configurando a Estrutura.mp410 - Criando Tooltip de Erros.mp411 - Validação de Login.mp42 - Estilos Globais.mp43 - Página de Login.mp44 - Isolando Componentes.mp45 - P gina de Cadastro.mp46 - Utilizando Unform.mp47 - Usabilidade do Input.mp48 - Validando Cadastro.mp49 - Exibindo Erros no Input.mp41 - Habilitando CORS na API.mp42 - API de Contexto.mp43 - Login pelo Contexto.mp44 - Mantendo Usuário no Storage.mp45 - Criando Hook de useAuth.mp46 - Logout da Aplicação.mp41 - Estrutura de Toasts.mp42 - Criando Hook de Toast.mp43 - Adicionanedo e Removendo Toasts.mp44 - Animando Toasts.mp41 - Configurando Rotas.mp42 - Rotas Autenticadas.mp43 - Finalizando o App.mp41 - Configurando Estrutura.mp42 - Padrões de Estilo.mp43 - Configurando StatusBar.mp44 - Configurando Navegação.mp45 - Densidade de Pixel.mp46 - Importando Fontes Externas.mp41 - Input e Button.mp42 - Tela de Autenticação.mp43 - Tela de Cadastro.mp44 - Integrando Unform.mp45 - Usabilidade em Formulários.mp46 - Foco e Preenchimento.mp47 - Validação dos Formulários.mp41 - Cadastro na Aplicação.mp42 - Autenticação de Usuários.mp43 - Rotas Pivadas.mp41 - Introdução.mp42 - Conceitos DDD e TDD.mp43 - Separando em Módulos.mp44 - Camada de Infra.mp45 - Configurando Imports.mp46 - Liskov Substitution Principle.mp47 - Reescrevendo Repositórios.mp48 - Dependency Inversion Principle.mp49 - Refatorando Módulo de Usuários.mp410  - Injeção de Dependências.mp411 - Usando Controllers.mp41 - Testes e TDD.mp42 - Configurando o Jest.mp43 - Pensando nos Testes.mp44 - Criando o Primeiro Teste.mp45 - Coverage Report.mp46 - Testes de Agendamento.mp47 - Testando Criação de Usuário.mp48 - Testando Autenticação.mp49 - Teste de Autenticação.mp410 - Provider de Storage.mp411 - Atualização do Avatar.mp41 - Mapeando as Features do Sistema.mp41 - Aplicando TDD na Prática.mp410 - Atualização do Perfil.mp411- Rota e Controller de Perfil.mp42 - recuperação de Senha.mp43 - Reset da Senha.mp44 - Finalizando Testes.mp45 - Salvando Tokens no Banco.mp46 - Emails em Desenvolvimento.mp47 - Template de E-mails.mp48 - Template Engine.mp49 - Refatoração dos Testes.mp41 - Listagem de Prestadores.mp42 - Filtrando Agendamentos por Mês.mp43 - Listando Dias Disponíveis.mp44 - Listando Horários Disponíveis.mp45 - Excluindo Horários Antigos.mp46 - Criação de Agendamento.mp47 - Regras do Agendamento.mp48 - Rotas e Controllers.mp41 - Agenda do Prestador.mp42 - Configurando MongoDB.mp43 - Estrutura de Notificações.mp44 - Enviando Notificações.mp45 - Refatorando os Testes.mp41 - Validando Dados.mp42 - Variáveis de Ambiente.mp43 - Utilizando Class Transformer.mp44 - Email pelo Amazon SES.mp45 - Organizando o Container.mp46 - Upload de Arquivos pelo Amazon S3.mp41 - Configurando Cache.mp42 - Cache Lista de Providers.mp43 - Invalidando Cache.mp44 - Cache de Agendamentos.mp45 - Refatorando Testes.mp46 - Express Rate Limit.mp41 - Introdução.mp42 - Utilizando Query Params.mp43 - Agendamentos no mesmo horário.mp44 - Dias Indisponiveis do Mês.mp45 - Clientes dos Agendamentos.mp46 - Serialização no Cache.mp47 - Organizando o Insomnia.mp41 - Criando Página de Recuperação.mp42 - Enviando Formulário a API.mp43 - Criando Página de Redefinição.mp44 - Implementando Definição.mp41 - Criando Header.mp42 - Próximo Agendamento.mp43 - Listagem de Agendamentos.mp44 - Calendário e Estilizações.mp45 - Disponibilidade do Mês.mp46 - Agendamento da API.mp47 - Exibindo Agendamentos em Tela.mp48 - Finalizando Listagem de Agendamentos.mp41 - Página de Perfil.mp42 - Troca de Avatar.mp43 - Alteração dos Dados.mp41 - Introdução.mp42 - Lista de Providers com Serialização.mp43 - Endereço das Imagens.mp44 - Criando Páginas e Rotas.mp41 - Header do Dashboard.mp42 - Buscando Providers da API.mp43 - Listagem de Prestadores.mp41 - Estrutura da Criação.mp42 - Alternando entre Providers.mp43 - Criando Picker de Data.mp44 - Buscando Disponibilidade na API.mp45 - Debbugando com Flipper.mp46 - Disponibilidade por Período.mp47 - Mostrando Horários em Tela.mp48 - Criação do Agendamento.mp41 - Criando Estrutura da Tela.mp42 - Formatando a Data.mp41 - Criando Tela de Perfil.mp42 - Atualizando Dados.mp43 - Atualização do Avatar.mp4'
    let aux = string.split('.mp4')
    return aux[num]

  }


 makeArray(){
    for(let i = 0;i <= 230; i++){
      this.videos.push({
        id: 0,
        view: false,
        pastaRaiz: "",
        pastaSeguinte:null,
        titulo: '',
        duracao: '',
        link: ''
      })

   }
  }

 getLastVideo(){
  this.localChecked = JSON.parse(window.localStorage.getItem('checked'));
  if(this.localChecked !== null && this.localChecked !== undefined){
     return this.localChecked.id;
  }else{
    return 0;
  }
 }

 getTamanho(){
   this.getVideos()

   return this.videos.length;
 }



  getOneVideo(number): Observable<any>{
  this.getVideos()

  for(let i=0; i <= this.videos.length; i++){

    if (this.videos[i].id == number){
      this.video.next(this.videos[i])
      return this.video;
    }
 }


}





}



