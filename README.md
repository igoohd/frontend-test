# MagaNets

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)

![Alt Text](https://media4.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif?cid=ecf05e47ldi0e4evzev6amjyx288h8hqczd5x057mff7ewl9&rid=giphy.gif&ct=g)
> Este projeto é um teste prático de frontend realizado para o LuizaLabs.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você precisa ter instalado `<NodeJs / NPM>` para rodar este projeto

## 🚀 Instalando MagaNets

Para instalar o MagaNets, siga estas etapas:

1- Clone este repositório:
```
git clone https://github.com/igoohd/luizalabs-frontend-test.git
```
2- Instale as dependências:
```
npm install
```

## ☕ Usando MagaNets

Para usar o MagaNets, siga estas etapas:

1- Inicie o ambiente de desenvolvimento com o script abaixo:
```
npm run serve
```

2- Será fornecido um endereço localhost para testar a aplicação

3- Para rodar os testes você deve digitar em seu terminal:
```
npm run test:unit:watch
```
ou
```
npm run test:unit:watch:coverage
```
Caso rode o script com cobertura de testes, você terá acesso ao relatório na pasta: `coverage/lcov-report/index.html`


## 😄 O que e Porque?<br>

### 🛠 Tecnologias<br>

Este projeto teve uso de algumas tecnologias importantes para o desenvolvimento front-end, muitas delas poderiam não ser utilizadas em um projeto simples como esse, porém, preferi utilizar ao máximo para mostrar meu conhecimento com elas. Abaixo explico os motivos de ter utilizado e documentações para conferência:

<b>1- VueJS</b> (https://vuejs.org/)</b>
Framework Javascript utilizado para criação de interfaces, foi utilizado apenas para demonstração do meu conhecimento com a tecnologia, tentei utilizar ao máximo tudo o que ele pode oferecer como Vuex, Vue Router, Vue test utils e etc. A versão 2 foi utilizada por ser a versão mais popular, utilizada e estável até o momento deste teste.

<b>2- Sass (https://sass-lang.com/)</b>
A extensão de linguagem CSS Sass foi utilizada para dar "super-poderes" ao CSS comum. Evitar reescrita de código, tornar a estilização mais legível e bem estruturada.

<b>3- Jest (https://jestjs.io/)</b>
Framework de testes JS utilizado para testar a aplicação em si, suas funcionalidades e evitar possíveis erros em alterações de código, esse projeto teve 85% de cobertura de testes como mostra a imagem abaixo:
![image](https://user-images.githubusercontent.com/85634547/151276104-ddb79c84-9738-410f-aee7-6b9d43a00bb6.png)

<b>4- VueTestUtils (https://vue-test-utils.vuejs.org/)</b>
Biblioteca de testes unitários para VueJs, responsável por ajudar no desenvolvimento de testes com o framework.

<b>5- Eslint</b>
Ferramenta responsável por encontrar e reportar problemas no código JavaScript, foi utilizado para evitar bugs e manter o código consistente. Além de ter integração com o Vue, Prettier e diversas outras tecnologias, criando regras e padrões de códigos que podem ser corrigidos automaticamente.


### 👀 Metodologias

<b>1- RSCSS (https://rscss.io/)</b>
Conjunto de regras para escrita e estruturação do CSS, utilizado para facilitar a manutenção da estilização do projeto, todas classes, representam um componente, elemento ou  variante, dando sentido à estilização. Por ser um projeto pequeno preferi utilizá-lo ao invés do BEM(http://getbem.com/introduction/) pois é mais simples e prático de se utilizar.

[⬆ Voltar ao topo](#MagaNets)<br>
