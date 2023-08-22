## Caderno de Anotações Entra21 React

### Sumário

- [Associando o git com o gitHub](#associando-o-git-com-o-github)
- [HTML](#html)
  * [Formatação do html](#formata-o-do-html)
  * [Anotações HTML](#anota-es-html)
  * [Inserindo links no HTML:](#inserindo-links-no-html)
- [Links:](#links)

### Associando o git com o gitHub
1. Criar o repositório no GitHub
2. Abrir o cmd no computador na pasta que vai ser guardado 
3. No cmd:
    1. git clone [link do repositório];
    2. Abrir a pasta 
    3. git status -> pra ver como estão os arquivos, se falta algo
    4. git add [nome do arquivo] -> adiciona um arquivo
    5. git commit -m "comentário" -> commita os arquivos, coloca no repositório remoto

*Após alterações nos arquivos locais:* 
- git status -> irá aparecer que tem mudanças 
- git add -> adiciona os arquivos pro staged 
- git commit -m "comentario" -> atualiza os arquivos no gitHub
- git push -u origin master

obs. o VS Code tem o terminal que pode ser usado como o cmd

*Quando o projeto é alterado no gitHub:*
- Primeiro tem que atualizar o repositorio local 
- git pull
- Depois o git push ja funciona


*Como tirar print para ajudar nas anotações: windows shift S*

### HTML
#### Formatação do html   
```
{
 <!DOCTYPE html> 
 <html lang="en">
    <head>
        parametros 
        <meta charset="UFT-8">
        <meta name="viewport" content="width=device-width, initial...>
        <title>Document</title>
    </head>

    <body>  
        texto     
        <h1>Título h1</h1> 
        <p> paragrafo </p>
    </body>  
 </html>  
}
```
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
Formatações em html
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


#### Inserindo links no HTML:

**alt** -> texto alternativo, aparece quando a imagem da errado e serve para indexar, para o Google entender o que tem no site, ajudando no engajamento.  
**target** ->    
blanc (abre o link em outra aba)   
self (abre no mesmo navegador)  
**title** -> texto que aoarece quando passa o mouse me cima do link    
**download** -> baixar a foto do link

            


### Links:
[Guide Markdown](https://www.markdownguide.org/cheat-sheet/)  
[Tutorial HTML e outras linguagens](https://www.w3schools.com/html/default.asp)
[Sumário HTML](https://alexandrealvaro.com.br/indice-markdown/)
