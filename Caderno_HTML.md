## Caderno de anotações HTML

### Sumário

- [Formatação básica](#formatação-básica-do-html-sem-divisões)
- [Tipos de listas](#listas-html)
- [Alterações no texto](#mudanças-no-texto-negrito-itálico-etc)
- [Anotações gerais](#anotações-html)
- [Estruturação](#estruturação-dentro-do-body-do-html)
- [Tabelas](#tabela-html)
- [Inserindo links](#inserindo-links-no-html)
- [Audio visual](#audio-visual-html)
- [Emmet Abbreviations](#emmet-abbreviations)
- [Formulários](#formulários)

#### Formatação básica do html sem divisões 
```
{
 <!DOCTYPE html> 
 <html lang="en">
    <head>
        // parametros 
        <meta charset="UFT-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0>
        <title>Document</title>
    </head>

    <body>  
        // texto     
        <h1>Título h1</h1> 
        <p> paragrafo </p>
    </body>  
 </html>  
}
```
```
{
    <!DOCTYPE html>
    <html lang="en">

    <head>
         
    <meta charset="UFT-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotyflix</title>
    
    </head>

    <body>
        <header>
            <nav>
                <ul>
                
                </ul>
            </nav>
        </header>
        <main>
            <section>

            </section>
            <section>
                <h2>FAQ</h2>

            </section>

        </main>
        <footer>

        </footer>
    </body>

    </html>
}
```


#### Listas html
ul -> unordered list
ol -> ordered list
```
{
    // exemplo de lista  <!--unordered list, ul-->
    <ul>
        <li>item 1</li>
        <li>item 2</li>
    </ul>
}
```
```
{
    <dt>heading A</dt>
    <dd>
        texto A
    </dd>

    <dt>heading B</dt>
    <dd>
        texto B
    </dd>
}
```
#### Mudanças no texto (negrito, itálico, etc) 
```
{
  <p><b> negrito </></p>   
  <p><strong>ênfase</strong></p>
  <p><i>italico</i></p>  
  <p><em>enfatizado</em></p>  
  <p><mark>grifado</mark></p>  
  <p><small>texto menor</small></p>
  <p><big>texto maior</big></p>
  <p><del>taxado</del></p>
  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p> 
  
}
```

```
{
    <form action="">

        <!-- Exemplo 001 - Caixa de texto -->
        <label for="idTexto">Texto</label><br>
        <input type="text" id="idTexto" name="nmTexto" class="inputTexto">

        <br>
        <!-- Exemplo 002 - Caixa de texto - Numerico -->
        <label for="idNumero">Numero</label><br>
        <input type="number" id="idNumero" name="nmNumero">

        <br>
        <!-- Exemplo 003 - Caixa de texto - Data -->
        <label for="idData">Data</label><br>
        <input type="date" id="idData" name="nmData">

        <br>
        <!-- Exemplo 004 - Caixa de texto - Senha -->
        <label for="idSenha">Senha</label><br>
        <input type="password" id="idSenha" name="nmSenha">

        <br><br>
        <!-- Exemplo 005 - Checkbox -->
        <input type="checkbox" name="nmOpcao1" id="idOpcao1">
        <label for="idOpcao1">Opação 1</label>
        <br>
        <input type="checkbox" name="nmOpcao2" id="idOpcao2">
        <label for="idOpcao2">Opação 2</label>
        <br>
        <input type="checkbox" name="nmOpcao3" id="idOpcao3">
        <label for="idOpcao3">Opação 3</label>

        <br><br>
        <!-- Exemplo 006 - Radio Button -->
        <input type="radio" name="nmGenero" id="idFeminino" checked>
        <label for="idFeminino">Feminino</label>
        <br>
        <input type="radio" name="nmGenero" id="idMasculino">
        <label for="idMasculino">Masculino</label>
        <br>

        <br><br>
        <!-- Exemplo 007 - Select -->
        <label for="idSelect">Select</label><br>
        <select name="nmSelect" id="idSelect">
            <option value="RS">Rio Grande do Sul</option>
            <option value="SC">Santa Catarina</option>
            <option value="PR">Paraná</option>
            <option value="SP">São Paulo</option>
            <option value="MG">Minas Gerais</option>
        </select>

        <br><br>
        <!-- Exemplo 008 - Datalist -->
        <label for="idNavegadores">Navegadores</label><br>
        <input list="idListaNav" id="idNavegadores">
        <datalist id="idListaNav">
            <option value="Internet Explorer">IE</option>
            <option value="Firefox">FI</option>
            <option value="Chrome">CH</option>
            <option value="Opera">OP</option>
        </datalist>


        <br><br>
        <!-- Exemplo 009 - Textarea -->
        <label for="idTextArea">Digite aqui sua pergunta:</label><br>
        <textarea name="nmTextArea" id="idTextArea" cols="30" rows="10"></textarea>



        <br><br>
        <input type="button" value="Capturar" onclick="capturaTela()">
    </form>
}
```
#### Anotações HTML

html: páginas de internet, layout de documentos e outros layouts específicos  
parte head -> não é visivel, é passado parâmetros nesse lugar  
parte body -> é a parte que se ve

**metadados**: dados que descrevem dados

**id = 'nome'** -> colocar id em algum lugar, por exemplo no footer, para depois poder colcoar como índice e ir direto pra esse local     
exemplo id:
```
{
    <footer id="idfooter">
        <p>Siga-nos no instagram: @Spotyflix</p>
        <p>www.spotyflix.com</p>
    </footer>
}
```

**toggle** ->
```
{
    <details>
        <summary>Pergunta/titulo do toggle</summary>
        <p>dentro do toggle</p>
    </details>
}
```
#### Estruturação dentro do body do HTML

Depois essa formatação é arrumada com o Css para ficar tudo no seu lugar  
**figcaption** -> colocar creditos na foto, linha peguena embaixo da foto  
```
{
    <body>
    <div>
        <!---------------- Area de Cabeçalho ---------------------->
        <header>
                <h1>titulo</h1>
                <nav>
                    <ul>  **unsorted list**
                        **cabeçalho usa links que levam a outras páginas**
                        <li><a href="">Home</a></li>
                        <li><a href="">Loja</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <p>logo da empresa</p>
            </div>
        </header>
        <!---------------- Barra Lateral Esquerda ---------------------->
        <aside>
            <p>aside esquerda</p>
        </aside>
        <!---------------- Sessao Principal ---------------------->
        <main>
            <section>
                <span><p>caixa de uma unica linha</p></span> **usado ao inves de strong, negrito, etc que é arrumado depois com css**  
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <span>facere modi animi</span>
                </p>
            </section>

            <section>
                <h2>Titulo</h2>
                <article>
                    <h3>titulo do artigo </h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ratione 
                        laboriosam tenetur reiciendis unde sunt praesentium.</p>
                </article>
            </section>

            <section>
                <figure>
                    <img src="" alt="">
                </figure>
            </section>
        </main>
        <!---------------- Sessão de Rodapé  ---------------------->
        <footer>

        </footer>
    </div>
</body>
}
```     

#### Tabela html 
##### Estrutura de uma tabela
```
{
    <!-- Estrutura completa de uma tabela-->
    <table border="1" cellpadding="10" width="100%" align="center">
        <thead>
            <tr>
                <th>Qtd</th>
                <th>Descrição</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr align="center"> <!--alinha no centro-->
                <td>1</td>
                <td>Lápis</td>
                <td>1,00</td>
            </tr>
            <tr bgcolor="red"> <!--background color -->
                <td align="right">2</td>
                <td>Caneta</td>
                <td>3,00</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Caderno</td>
                <td>10,00</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Borracha</td>
                <td>5,00</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2"><b>Total</b></td>
                <td>19,00</td>
            </tr>
        </tfoot>

    </table>

}
```

#### Inserindo links no HTML:

**alt** -> texto alternativo, aparece quando a imagem da errado e serve para indexar, para o Google entender o que tem no site, ajudando no engajamento.  
**target** ->    
blanc (abre o link em outra aba)   
self (abre no mesmo navegador)  
**title** -> texto que aoarece quando passa o mouse me cima do link    
**download** -> baixar a foto do link

iframe -> é um html dentro de outro html

#### Audio visual html
```
{
    <!-- Link de Download-->
    <p>baixe a <a href="assets/brazil-flag.png" download>bandeira do brasil</a></p>

    <!-- Tipos de imagem jpeg, png, gif, svg, ico -->
    <figure>
        <img src="assets/brazil-flag.png" alt="" width="100" title="Bandeira do Brasil">
        <figcaption>Créditos: Algum Artista Qualquer</figcaption>
    </figure>

    <!-- Vídeo mp4, ogg, WebM-->
    <video width="320" controls autoplay loop muted>
        <source src="assets/20230513_160933.mp4">
        <source src="assets/20230513_160933.ogg">
        Seu Navegador não é compatível com a tag Vídeo
    </video>

    <!-- Vídeo do Youtube -->
    <iframe width="420" height="315" src="https://www.youtube.com/embed/SsqXAP0EeEI">
    </iframe>

    <!-- Audio -->
    <audio controls autoplay loop muted>
        <source src="assets/bad_to_the_bone.mp3" type="audio/mpeg">
        <source src="assets/bad_to_the_bone.ogg" type="audio/ogg">
        Seu Navegador não é compatível com a tag Audio
    </audio>
    <p>download</p>
}
```

#### Emmet Abbreviations
Conjunto de abreviações de código que ajudam a ganhar produtividade  

** "html:5" ou "!" -> monta a estrutura básica do html  
** "sp" e "tab" -> gera todo o código de um span  
** "a" e "tab" -> gera o código da âncora com o href  
** "session>div>h1" e "enter" -> cria a estrutura feita um h1 dentro de uma div que esta dentro da session, ou seja, cria elementos aninhados    
** "header>nav>ul>li*3" e "enter" -> cria o li com 3 itens  
** "h1{titulo da pagina}" e "enter" -> cria o h1 com esse titulo dentro dele e assim com outros componentes tambem   
** "header+main+footer" e "enter" -> cria componentes no mesmo nível hierarquico, ou seja, cria elementos "irmãos"   
** "lorem" -> cria um texto redundante só para formatar o site  
** "lorem10" -> cria o texto redundante com 10 palavras, e assim com outros números  
** "ul>lorem6*4" -> cria a ul com 4 li, porque é uma tag filha  
** "div[id=divPrincipal]" e "enter" -> cria a div com seu id, da para colocar o name e calss também, todos as mesmo tempo  
** "div.nomeClasse" -> cria a div com a sua class nomeada  
** "div#nomeId" -> cria a div com o id nomeado  
** "#idCard" -> cria uma div com esse nome  
** ".card" -> cria a div com esse nome de classe  
** "[name=div1]" -> cria uma div com o name div1  
** "ul>li*4{texto $}" -> cria lista com os textos 1, texto 2... o $ representa números sequenciais  
** "ul>li*3.class-${texto $}" -> cria cada li com o nome class-1, class-2...   
** "(header>nav)+main+footer" -> cria a estrutura com o nav dentro do header e o header, main e footer no mesmo nivel hierárquico ou pode se usar "header>nav^main+footer" que fica igual, o ^ é como se saisse um nivel hierárquico  

- [Emmet Documentation](https://docs.emmet.io/cheat-sheet/)

exemplo: 
```
{

    <!--(header>nav>ul>li*3{menu $})+(main>section.linha>.card#card-$*4>(h2{Nome $}+p{descrição}+button{Comprar}))+footer-->
    <header>
        <nav>
            <ul>
                <li>menu 1</li>
                <li>menu 2</li>
                <li>menu 3</li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="linha">
            <div class="card" id="card-1">
                <h2>Nome 1</h2>
                <p>descrição</p>
                <button>Comprar</button>
            </div>
            <div class="card" id="card-2">
                <h2>Nome 2</h2>
                <p>descrição</p>
                <button>Comprar</button>
            </div>
            <div class="card" id="card-3">
                <h2>Nome 3</h2>
                <p>descrição</p>
                <button>Comprar</button>
            </div>
            <div class="card" id="card-4">
                <h2>Nome 4</h2>
                <p>descrição</p>
                <button>Comprar</button>
            </div>
        </section>
    </main>
    <footer></footer>
}
```

#### Formulários

- value -> texto que inicia na caxa de texto do formulário, valor que eu vou capturar
- type do button -> button(botão, captura só com JS), reset (limpar) ou submit (pega os dados e envio)

```
{

}
```
