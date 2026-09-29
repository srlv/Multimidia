# Multimidia

# Devil May Hire

Página multimídia de apresentação para uma dupla de estudantes de T.I., voltada para contratação nas áreas de hacking ético e segurança da informação. A estética é inspirada em Devil May Cry: preto, vermelho sangue, dourado e tipografia gótica.

Projeto feito só com HTML, CSS e JavaScript puro, sem frameworks e sem etapa de build.

## Estrutura

```
devil-hire/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── img/
    │   ├── hero.jpg
    │   ├── pessoa1.jpg
    │   ├── pessoa2.jpg
    │   └── projeto1.jpg ... projeto4.jpg
    ├── video/
    │   └── hero.mp4      (opcional)
    └── audio/
        └── tema.mp3      (opcional)
```

A pasta `assets/` não vem com o projeto. Crie as pastas e coloque os arquivos com os nomes acima. Se algum arquivo faltar, o espaço correspondente continua mostrando o fundo listrado com o nome esperado.

## Como usar

1. Baixe os três arquivos e crie a pasta `assets/` ao lado deles.
2. Abra o `index.html` no navegador (duplo clique).
3. Para testar com servidor local, se preferir:
   ```
   python -m http.server 8000
   ```
   Depois acesse `http://localhost:8000`.

As fontes (Cinzel Decorative e Rajdhani) vêm do Google Fonts, então é preciso internet para vê-las. Sem conexão, a página usa fontes padrão do sistema.

## O que personalizar

| O quê | Onde |
|---|---|
| Nomes, bios, tags e links (GitHub, LinkedIn) | `index.html`, seção "A dupla" |
| Especialidades e níveis das barras | `index.html`, atributo `data-v` (0 a 100) e `data-c` (`hack`, `sec` ou `dev`) |
| Legendas dos projetos | `index.html`, atributo `data-cap` em cada `figure` |
| E-mail que recebe as mensagens | `script.js`, constante `EMAIL` |
| Cores | `style.css`, bloco `:root` |
| Fontes | `index.html` (link do Google Fonts) e `style.css` (`--titulo` e `--corpo`) |

Para adicionar uma habilidade nova, copie uma linha existente:

```html
<div class="skill" data-c="sec" data-v="75"><b>Nome da habilidade</b><i></i></div>
```

## Interações

- **HUD de estilo:** o rank sobe de D até SSS conforme a rolagem da página.
- **Abas de filtro:** mostram só as especialidades da categoria escolhida.
- **Barras de habilidade:** enchem quando entram na tela.
- **Galeria:** clique para ampliar e use Esc ou o botão Fechar para sair.
- **Trilha sonora:** botão "Som" no topo. O navegador só toca áudio depois de um clique, por isso ele não inicia sozinho.
- **Formulário de contato:** abre o programa de e-mail do visitante com assunto e mensagem preenchidos. Não há servidor, então nada é enviado sem o visitante confirmar no próprio e-mail.

## Publicar

Como é um site estático, funciona em qualquer hospedagem gratuita:

- **GitHub Pages:** envie os arquivos para um repositório e ative o Pages em Settings > Pages.
- **Netlify** ou **Vercel:** arraste a pasta do projeto para o painel.

## Acessibilidade

- Navegação por teclado com foco visível.
- Animações reduzidas quando o sistema pede `prefers-reduced-motion`.
- Layout responsivo para celular.

Lembre-se de escrever o atributo `alt` das imagens com uma descrição real quando colocar as fotos.

## Créditos

- Estética inspirada na franquia Devil May Cry (Capcom). Este é um projeto acadêmico sem fins comerciais e não tem relação oficial com a Capcom. Não use imagens, música ou arte oficial do jogo sem ter os direitos.
- Fontes: [Cinzel Decorative](https://fonts.google.com/specimen/Cinzel+Decorative) e [Rajdhani](https://fonts.google.com/specimen/Rajdhani), via Google Fonts.