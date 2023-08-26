## Caderno de anotações HTML

### Sumário

- [Formatação básica](#formatação-básica-do-html-sem-divisões)
- [Tipos de listas](#listas-html)
- [Alterações no texto](#mudanças-no-texto-negrito-itálico-etc)
- [Anotações gerais](#anotações-html)
- [Inserindo links](#inserindo-links-no-html)
- [Estruturação](#estruturação-dentro-do-body-do-html)
- [Em breve...](#tabela-html)
- [Em breve...](#audio-visual-html)
- [Em breve...](#css-básico)

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
```
{
    // exemplo de lista
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
#### Anotações HTML

html: páginas de internet, layout de documentos e outros layouts específicos  
parte head -> não é visivel, é passado parâmetros nesse lugar  
parte body -> é a parte que se ve

**metadados**: dados que descrevem dados

**id = 'nome'** -> colocar id em algum lugar, por exemplo no footer, para depois poder colcoar como índice e ir direto pra esse local     

#### Inserindo links no HTML:

**alt** -> texto alternativo, aparece quando a imagem da errado e serve para indexar, para o Google entender o que tem no site, ajudando no engajamento.  
**target** ->    
blanc (abre o link em outra aba)   
self (abre no mesmo navegador)  
**title** -> texto que aoarece quando passa o mouse me cima do link    
**download** -> baixar a foto do link



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
        <!---------------- Bara Lateral Direita ---------------------->
        <aside>
            <p>aside direita</p>
        </aside>
        <!---------------- Sessão de Rodapé  ---------------------->
        <footer>

        </footer>
    </div>
</body>
}
```     

#### Tabela html 




#### Audio visual html

<!-- Link de Download-->
    <p>baixe a <a href="assets/brazil-flag.png" download>bandeira do brasil</a></p>


#### CSS básico

Transforma o que é linha em coluna:
```
{
    <style>
    display: flex;
}
```