## Caderno de anotações CSS

### Sumário
- [Anotações gerais](#anotações-gerais-css)
- [CSS Básico](#css-básico)
- [Google Calendar](#google-calendar)
- [Comandos para estilizar](#comandos-que-estilizam-a-página-no-css)
    - [Background](#background)
    - [Flex](#flex)
    - [Texto](#texto)
    - [Bordas](#bordas)
    - [Tabela](#comandos-de-tabelas)
    - [Lista](#comandos-de-lista)
    - [Fonte](#comandos-de-fonte)
    - [Imagem](#comandos-de-imagem)
- [Estado de links](#comandos-para-estado-de-links-colocar-no-style)
- [Criando Variáveis](#criando-variáveis)


#### Anotações gerais CSS
**Funções:**  Estilizar elementos HTML, controle de layout, animações e transições, pseudoclasses e pseudoelementos, estilos de formulários, transformações e efeitos 2D/3D, controle de impressão


#### CSS básico
é colocado "< style>" dentro do "head" 

Aonde é colocado os nomes das classes: 
```
{
    <h1 id="idTituloPrincipal" name="" class="clTituloPrincial" >Titulo Teste</h1>

    <h2 class="clTituloPrincial sublinhado">Titulo 2</h2>

    <div class="clDiv1">
}
```
CSS estilo externo : <link rel="stylesheet" href="style.css">

Aonde se coloca o CSS: Cascateamento: 
- CSS Padrão Navegador
- CSS Folhas de estilo interno e externo (interno é quando a gente abre o style com o *,#,etc e externo é um arquivo separado .css)
- CSS Inline

Sites cores:   
[Color Wheel](https://color.adobe.com/pt/create/color-wheel)   
[ColorPalletes](https://coolors.co/)   
Sites fontes:  
[Google Fontes](https://fonts.google.com/) 

landing page -> 

O CSS tem seletores que são colocados no style para encontrar os elementos para estilizar. Existem 5 tipos de seletores: simples, combinadores, de pseudoclasse, de pseudoelementos e de atributos.
- [Seletores simples](#seletores-simples)  
- [Seletores combinadores](#seletores-combinadores)



##### Seletores simples
Selecionam os elementos com base no id, nome, classe, etc. 
```
{
    <style>
        /* Seletor Universal*/  <!--seleciona toda a pagina-->
        *{
            margin: 0;
            padding: 0;
            border: 0;
            
        }

        /* Seletor de classe */
        .clTituloPrincial{
            color: blue;
        }

        .clDiv1{
            background-color: beige;
        }

        .clSpan1{
            background-color: brown;
        }
        .sublinhado{
            text-decoration: underline;
        }

        /* Seletor de ID */
        #idTituloPrincipal{
            color : red; 
            background-color: aqua;
        }

        /* Seletor de Tag */
        h3{
            color: blueviolet;
        }

        .linha {
            border: 1px solid black;
            display: flex; <!--transforma linha em coluna-->
        }

        .coluna1{
            border: 1px solid black;
            width: 30%;
        }

    </style>
}
```
##### Seletores combinadores
Seleciona os elementos com base em uma relação específica entre eles

#### Google calendar 
    ```
    {
        <iframe src=" " style="border: 0" width="100%" height="600" frameborder="0"> </iframe> 
    }
    ```

#### Comandos que estilizam a página no CSS
Comandos gerais: 
- padding -> px -> 
- margin -> px -> margem
- width e height 
- display -> block (quebra a linha, pega a altura do conteudo e a largura total), inline (pega a altura do elemento pai, não quebra a linha)
- justify-content -> flex-end, flex-start, center, space-between, space-around, space-evenly (mesmo que o around mas deixa todos os espaçamentos iguais) -> alinhamento horizontal, se usa ao mesmo tempo que o display flex
- align-items -> flex-end, flex-start, center, stretch, baseline -> alinhamento vertical sem wrap 
- align-content -> flex-end, flex-start, center, space-between, stretch, space-around, space-evenly (mesmo que o around mas deixa todos os espaçamentos iguais) -> alinhamento vertical com wrap 

##### Background 
    - background-color: beige;
    - background-image: url("assets/fundo.png");
    - background-repeat: no-repeat;
    - background-position: center top;
    - background-attachment: fixed;
    - background-size: 1000px;
    - opacity: 30%;

#####  Flex 
-> quebra de conteúdo    
    - flex-wrap -> wrap, nowrap(escapa), wrap-reverse -> quebra o conteudo e coloca em outra linha, não deixa escapar  
    - flex-flow -> flex-direcion + flex-wrap 
    - flex-grow
    - flex-shrink
    - flex-basis: 200px;
    - flex-direction: row;  /*column; column-reverse; row; row-reverse;*/

##### Texto
    - text-align: justify; /*left, right, center, justify*/  -> alinha o texto de uma linha
    
    - text-decoration-line: overline line-through;
    - text-decoration-color: black;
    - text-decoration-style: double;
    - text-decoration-thickness: 1px;
    - text-decoration: underline red wavy 1px;

    - /*Transformações de Texto*/
    - text-transform: capitalize;/*uppercase; lowercase*/

    - text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;

    - text-indent: 30%;
    - letter-spacing: 3px;
    - line-height: 20px;
    - word-spacing: 15px;
    - white-space: nowrap; /*impede quebra de linha forçando o scroll horizontal*/

##### Bordas
    - border-style: dashed;
    - border-color: blue;
    - border-width: 10px;

    - border-top-style: solid;
    - border-bottom-style: dotted;

    - border-left-color: blueviolet;
    - border-right-width: 2px;

    - padding: 15px;
    - padding-left: 30px;
    - padding-top: 50px;
    - padding-bottom: 60px;
    - padding-right: 40px;

    - outline-style: solid;
    - outline-color: red;
    - outline-width: thin;

    - border-radius: 50%;

##### Comandos de tabelas:  
    - vertical-align -> alinha o conteudo de um item da tabela centralizado, em cima ou embaixo
    - overflow-y -> configura o scroll da vertical, auto seria o ideal  
    - overflow-x -> configura o scroll da horizontal, auto seria o ideal  
    - empty-lines -> limpa o conteudo 
    - line-height 

        ```
        {
            tr:nth-child(odd){ /*even, odd, 3n, 4, 2n + 1...*/
                background-color: bisque;
            }
        }
        ```


##### Comandos de lista: 
    - list-style-type -> muda o pontinho da frente da lista  
    - list-style-image: url("assets/index.gif"); -> coloca uma imagem no lugar dos pontinhos da frente  
    - list-style-position -> inside, etc -> muda o local do pontinho ou imagem

##### Comandos de Fonte: 
    - font-size -> px
    - font-style: italic;
    - font-variant: normal;
    - font-weight: 800 / lighter/ etc
    - font-size: 0.5em;
    - font-family: 'Courier New', Courier, 'lucida console', monospace;

##### Comandos de imagem: 
    - opacity: 0.3; 
    - filter: blur(5px); -> borrado 
    - filter: brigthness (3); -> claridade da foto
    - filter: contrast(0.5); -> contraste
    - filter: grayscale(0.2);
    - filter: invert();
    - filter: saturation(2); 
    - filter: sepia(0.5);
    - filter: drop-shadow(rgb);
    - filter: hue-rotate(120deg);

##### Comandos para estado de links: (colocar no style)
    - a:link -> link normal
    - a:visited -> links ja visitados
    - a:hover -> quando passar por cima do link
    - a:active -> quando clicar no link 
    - obs: normalmente se junta link e visited, e hover e active com as mesmas caracteristicas

##### Criando variáveis:
    ```
    {
    /* Palheta de Cores*/
        <style>
        :root {
            --corPrincipal: #04C4D9;
            --corComplementar: #2E3159;
            --corComplementar2: #2e31597d;
            --corContraste1: #D94A64;
            --corContraste2: #A62F03;
            --corNeutro1: white;
            --corNeutro2: black;
            --corFundo1: #26262b;
            --corFundo2: azure;
        }
        </style>

        h1 {
            color: var(--corPrincipal);
        }
    }
    ```

#### Cursor do Mouse
mudar o cursor do mouse em áreas e/ou situações específicas do site
A propriedade css é: 
```
{ 
    cursor : tipo-cursor 
} 
```
<img src="assets\cursoresMouse.jpg" alt="" width="100" title="Imagem cursores">


#### Tags editáveis 
É como se transformássemos uma div ou um h1 num campo que permite digitação
A principal finalidade da propriedade contenteditable é criar elementos que possam funcionar como campos de entrada de texto, mas que não estão restritos a elementos de formulário, como (input> ou *textarea>*). Isso permite que se crie interfaces de edição de texto personalizadas e flexíveis, como editores de texto enriquecido (editores que permitem formatação) em páginas da web.

<img src="assets\tagsEditaveis.png" alt="" width="100" title="Tags editáveis">

