# Multimidia

# Devil May Hire

Página multimídia de apresentação para uma dupla de estudantes de T.I., voltada para contratação nas áreas de hacking ético e segurança da informação. 

Projeto feito só com HTML, CSS e JavaScript puro, sem frameworks e sem etapa de build.

## Estrutura

```
devil-hire/
├── index.html
├── style.css
├── script.js
└── assets/

## Como usar

1. Baixe os três arquivos e crie a pasta `assets/` ao lado deles.
2. Abra o `index.html` no navegador (duplo clique).
3. Para testar com servidor local, se preferir:
   ```
   python -m http.server 8000
   ```
   Depois acesse `http://localhost:8000`.

As fontes (Cinzel Decorative e Rajdhani) vêm do Google Fonts, então é preciso internet para vê-las. Sem conexão, a página usa fontes padrão do sistema.

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
- Animações reduzidas quando o sistema pede.
- Layout responsivo para celular.

## Créditos

- Estética inspirada na franquia Devil May Cry (Capcom). Este é um projeto acadêmico sem fins comerciais e não tem relação oficial com a Capcom. Não use imagens, música ou arte oficial do jogo sem ter os direitos.

## Caçadores Hire
- Rômulo Levy 
- Servolo Pedro 
