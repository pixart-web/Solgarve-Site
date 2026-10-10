# Solgarve — website institucional

Website estático em Astro + TypeScript, em português de Portugal e inglês. Versão de revisão local, **sem reservas**. Não foi publicado nem alterou a produção.

## Executar

Requer Node.js >= 22.12 (versão par suportada) e npm >= 9.6.5. A implementação foi construída com Node 26.9.0 e Astro 7.3.5; versões exatas no lockfile.

```sh
npm ci
npm run dev -- --port 4321
```

Abrir http://127.0.0.1:4321/pt/ ou http://127.0.0.1:4321/en/.

```sh
npm run check
npm run build
npm test
npm run preview -- --port 4322
```

O Astro 7 mantém servidores em background. Estado e paragem: `npx astro dev status`, `npx astro dev stop`, `npx astro preview status`, `npx astro preview stop`.

## Estrutura e edição

- `src/data/site.ts`: marca, contactos, idiomas, navegação e slugs das páginas.
- `src/data/content.ts`: apartamentos, serviços/horários, destinos, alt text, categorias e pontos focais. Os registos pendentes são filtrados antes de gerar rotas.
- `src/components/Home.astro`: homepage completa.
- `src/components/PageContent.astro`: páginas editoriais, detalhes, contactos e rascunhos legais.
- `src/components/Photo.astro`: AVIF/WebP/JPEG, dimensões reservadas e carregamento responsivo.
- `src/components/Gallery.astro`: filtros e lightbox nativa; teclado, Escape, foco, gestos horizontais; links para imagens como fallback sem JavaScript.
- `src/layouts/Layout.astro`: metadados, hreflang, navegação, rodapé e dados estruturados.
- `src/pages/[lang]/[...path].astro`: rotas estáticas traduzidas. O idioma preserva a página equivalente.
- `src/styles/global.css`: tokens e estilos responsivos. `prefers-reduced-motion` desativa animações/transições.
- `assets/originals/`: ficheiros de referência recuperados. Não são copiados para o site final.
- `public/images/`: derivados otimizados e logótipo original. `npm run images` recria derivados a partir dos originais.

Contactos usam `tel:` e `mailto:`; o mapa só abre ao clicar. Não há base de dados, CMS, autenticação, formulário, tracking, cookies definidos pela aplicação ou carregamento de fontes/imagens externas.

## Verificação no browser

Os testes dirigidos são executados com Playwright CLI (não pressupõem uma instalação de Chrome do utilizador):

```sh
npx playwright-cli install-browser chromium
npx playwright-cli --session solgarve open http://127.0.0.1:4322/pt/ --config .playwright/cli.config.json
npm run test:browser
```

`browser-qa.mjs` é uma função consumida pelo CLI, não um programa Node independente. Requer a versão estática servida em 4322. Verifica 22 rotas PT/EN × 5 larguras (360, 390, 768, 1024, 1440), metadados básicos, correspondência de idiomas, overflow, menu, galeria, foco, teclado, 404 e redução de movimento; captura as páginas principais. Os resultados completos e limitações estão em `docs/qa-report.md`.

## Publicação futura em alojamento convencional

**Pode carregar esta revisão no subdomínio `solgarve.pixart.pt`; ainda não é a versão institucional validada.** Os bloqueios editoriais/jurídicos estão em `docs/editorial-pending.md`. `docs/launch-readiness.json` tem de refletir aprovações reais antes de ativar produção. As páginas legais continuam com noindex até serem atualizadas e retiradas do estado de rascunho no código.

1. Resolver pendências, validar as ligações institucionais, substituir/rever os rascunhos legais e atualizar o sitemap para as páginas aprovadas.
2. Verificar o domínio centralizado em `src/data/deployment.json`, usado pela configuração, metadados, dados estruturados e sitemap.
3. Depois de aprovar os campos de `launch-readiness.json`, executar `PUBLIC_SITE_MODE=production npm run build`.
4. Confirmar HTML, robots, canonical e hreflang da versão gerada; repetir a QA. O teste estático `npm test` é intencionalmente um gate de revisão e espera noindex.
5. Apenas com autorização de deploy, carregar o conteúdo de `dist/` para o document root do alojamento. Não é necessário Node no servidor final.
6. Adaptar os exemplos Apache/Nginx de `deployment/` à configuração existente; preservar TLS e serviços alheios. Aplicar redirects explícitos de `docs/url-migration.md`, devolver 404 corretamente e remover o cabeçalho noindex apenas após aprovação.

A revisão usa `noindex,nofollow` e `robots.txt: Disallow: /`. Isto desencoraja indexação; não é autenticação nem uma barreira de acesso. O modo padrão é sempre revisão.

## Documentação

- `docs/brief.md`: brief original.
- `docs/implementation-status.md`: checkpoint para retoma.
- `docs/source-audit.md`: fontes verificadas e limitações.
- `docs/asset-inventory.md` e `docs/assets-source.json`: origem, dimensões, utilização e direitos.
- `docs/licenses/`: licenças das fontes e ícones.
- `docs/url-migration.md`: mapa de migração.
- `docs/editorial-pending.md`: condições antes do lançamento.
- `docs/qa-report.md`: verificações efetivamente realizadas.
- `output/playwright/`: screenshots reais e relatórios de medição.

## Pacote para o subdomínio

ZIP compilado em `entrega/solgarve-pixart-upload.zip`, com os ficheiros diretamente na raiz. Instruções em `entrega/INSTRUCOES-UPLOAD.txt`. Destino HTTPS: `solgarve.pixart.pt`. Revisão com noindex; não foram enviados ficheiros ao servidor.
