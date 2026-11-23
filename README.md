# Minha Primeira Aplicação React

Projeto criado com Vite (template React) para praticar JSX e componentização.

## Componentes
- **Header**: título da aplicação
- **Footer**: texto de rodapé
- **Card**: recebe dados via props (titulo, descricao, imagem)
- **Lista**: recebe um array de strings via props e renderiza com `.map()`
- **App**: monta tudo usando Fragment

## Como rodar
npm install
npm run dev

## Reflexão

### Explique a diferença entre a abordagem imperativa (JavaScript puro/manipulação do DOM) e a declarativa (React).

Na abordagem **imperativa**, o programador descreve *passo a passo como* a
interface deve ser alterada: seleciona elementos com `document.getElementById`,
cria nós com `createElement`, altera `textContent`, adiciona e remove filhos
manualmente. Ele é responsável por manter a tela sincronizada com os dados, o que
fica complexo e propenso a erros conforme a aplicação cresce.

Na abordagem **declarativa** (React), o programador descreve *como a interface
deve ser* para um determinado estado ou conjunto de dados, e o React cuida de
atualizar o DOM. Em vez de dizer "adicione este `<li>` aqui", escrevemos
componentes que retornam JSX e, quando os dados mudam, a interface é
atualizada automaticamente. O código fica mais legível, previsível e reutilizável.

### Por que o Virtual DOM otimiza a performance?

Manipular o DOM real é custoso, pois cada alteração pode forçar o navegador a
recalcular layout e repintar a tela. O **Virtual DOM** é uma representação leve
do DOM mantida em memória (objetos JavaScript). Quando o estado muda, o React:

1. Cria uma nova árvore do Virtual DOM;
2. Compara com a versão anterior (processo chamado *diffing*/reconciliação);
3. Descobre exatamente o que mudou;
4. Aplica no DOM real **somente essas diferenças**, de forma agrupada.

Assim, em vez de reconstruir toda a página, apenas as partes necessárias são
atualizadas, reduzindo operações caras no DOM real.