# Minha Primeira Aplicação React

Aplicação de apresentação pessoal criada com **React + Vite** para praticar JSX, componentização e props.

**Autora:** Thaís
**Disciplina:** Desenvolvimento de interfaces | **Professor:** Juan

## Tecnologias
- React
- Vite
- JavaScript (JSX)
- CSS

## Estrutura de componentes

| Componente | Função |
|---|---|
| `App` | Monta a página usando Fragment (`<> </>`) |
| `Header` | Título da página |
| `Footer` | Texto de rodapé |
| `Card` | Exibe título, descrição e imagem recebidos via **props** |
| `Lista` | Recebe um array de strings via props e renderiza com `.map()` e `key` |

## Como rodar

```bash
git clone https://github.com/ThaisGeovanna/minha-primeira-app.git
cd minha-primeira-app
npm install
npm run dev
```

Depois, abra `http://localhost:5173` no navegador.

## Reflexão

### Qual a diferença entre a abordagem imperativa (JavaScript puro/DOM) e a declarativa (React)?

Imagine que você quer mostrar uma lista de hobbies na tela.

**Imperativo (JavaScript puro):** eu preciso dar todas as ordens ao navegador, uma por uma. Procuro a `<ul>` com `document.querySelector`, crio cada `<li>` com `createElement`, escrevo o texto com `textContent` e encaixo na lista com `appendChild`. Se um hobby for removido, eu também preciso lembrar de procurar e apagar aquele `<li>` específico. Ou seja, eu cuido do **"como"** e de manter a tela igual aos dados.

**Declarativo (React):** eu apenas descrevo o **resultado final**. No componente `Lista`, digo: "para cada item do array, mostre um `<li>`". Se o array mudar, o React refaz a tela sozinho. Eu não preciso dizer o que adicionar ou remover, só como a interface deve ficar com aqueles dados.


### Por que o Virtual DOM otimiza a performance?

Manipular o DOM real é custoso, pois cada alteração pode forçar o navegador a recalcular o layout e repintar a tela. O **Virtual DOM** é uma representação leve do DOM mantida em memória, feita de objetos JavaScript. Quando o estado muda, o React:

1. Cria uma nova árvore do Virtual DOM;
2. Compara com a versão anterior (processo de *diffing* ou reconciliação);
3. Identifica exatamente o que mudou;
4. Aplica no DOM real **somente essas diferenças**.

Assim, em vez de reconstruir toda a página, apenas as partes necessárias são atualizadas, reduzindo operações caras no DOM real.


## O que aprendi

Foi a minha primeira vez usando React e no começo achei meio confuso, principalmente na hora de instalar tudo. O que mais entendi foi como funcionam os componentes. 

Agora vi que dá pra separar em pedaços (Header, Footer, Card, Lista) e reutilizar.Também aprendi que o JSX parece HTML, mas tem umas diferenças, como usar className no lugar de class e fechar todas as tags. Ainda tenho dificuldade com algumas coisas, mas acho que vou melhorar praticando mais.