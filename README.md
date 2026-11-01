# Daniel Matos Falcão · Portfólio

Portfólio de desenvolvimento web com apresentação pessoal, projetos em destaque e catálogo pesquisável de 25 projetos públicos. Interface em português, responsiva, com HTML semântico, navegação por teclado e filtros acessíveis.

[GitHub](https://github.com/batmit) · [LinkedIn](https://www.linkedin.com/in/daniel-falc%C3%A3o-7972351ab/) · [Medium](https://medium.com/@danielmatosfalc)

## Executar localmente

Requer Node.js 22 ou superior. Não utiliza dependências externas de execução ou build.

```sh
npm run build
npm run check
npm start
```

Abra http://127.0.0.1:4173. Os arquivos de produção são gerados em `dist/`; não edite essa pasta diretamente.

## Estrutura

- `src/index.html`: apresentação, seções e metadados.
- `src/styles.css`: identidade visual e layout responsivo.
- `src/app.js`: busca, filtros e geração dos cartões.
- `src/data/projects.json`: catálogo editorial dos projetos.
- `src/assets/`: recursos visuais locais.
- `scripts/`: build, verificação e servidor local.
- `.github/workflows/pages.yml`: validação de pull requests e publicação no GitHub Pages.
- `docs/portfolio-review.md`: análise e critérios de seleção.

## Atualizar projetos

Edite `src/data/projects.json`. Cada projeto tem `repo`, `title`, `description`, `category`, `tech`, `featured` e `demo` (URL HTTPS ou null). As categorias são geradas automaticamente. Use apenas afirmações verificáveis; não associe tecnologias sem evidência no código. Depois execute build e check.

A lista é uma fotografia editorial de 01/11/2026, sem dependência da API do GitHub no navegador. Inclui sites, ferramentas web, aplicações e estudos públicos; repositórios privados, projetos sem código web e modelos de portfólio ficam fora. O Let Me Ask é mantido por constar no portfólio original, com a limitação do repositório explicitada.

## Publicação

No GitHub, selecione **Settings → Pages → Source → GitHub Actions**. Após integrar as alterações à branch main, o workflow publica `dist/`. Os caminhos relativos suportam hospedagem em subdiretórios. O workflow de PR valida o conteúdo sem publicar.

O arquivo `.openai/hosting.json` registra a hospedagem no Sites. Essa publicação tem acesso privado por padrão; ela é separada do GitHub Pages.

## Conteúdo e atribuições

As imagens tipográficas dos cartões são composições ilustrativas, não capturas das aplicações. Os links externos de demonstração são os informados no README anterior; sua disponibilidade atual não foi confirmada. Fontes opcionais: DM Sans e Manrope via Google Fonts, com alternativas locais.

A imagem histórica `25550.jpg` foi preservada e não é utilizada pela nova interface. Crédito original: “Background vector created by starline — www.freepik.com”. Nenhuma licença nova foi atribuída ao conteúdo existente.
