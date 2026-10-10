# Verificação — 29/09/2026

## Pacote solgarve.pixart.pt

- Astro check: 0 erros, 0 avisos, 0 hints.
- Build estático: 24 documentos HTML (22 páginas PT/EN, raiz, 404).
- Teste estático: 811 referências locais válidas; H1 único, metadados, noindex, sitemap e ausência de formulários, iframes e fluxo de reservas.
- Domínio: canonical, hreflang, Open Graph, dados estruturados e sitemap usam `https://solgarve.pixart.pt`. Sem referências ao domínio antigo ou localhost nos HTML.
- Playwright Chromium: **110 combinações** (22 rotas × 360, 390, 768, 1024, 1440 px), sem falhas de resposta, overflow horizontal, erros JS ou pedidos falhados.
- Idioma mantém a página equivalente nas 22 rotas; navegação real PT → EN testada.
- Galeria: Enter, setas anterior/seguinte, Tab retido, Escape e devolução de foco; filtros Todos/Piscinas verificados.
- Menu móvel: abertura por teclado e fecho por Escape; redução de movimento e ampliação de texto a 200% sem overflow.
- 404 testada com rota inexistente. O único erro HTTP esperado é o próprio 404.
- axe-core: nove combinações representativas de página/viewport; **zero violações automáticas** nos critérios WCAG 2 A/AA, 2.1 AA e 2.2 AA selecionados. Isto não certifica conformidade integral.
- Screenshots reais desktop/mobile de homepage, listagem, detalhe, serviços, galeria, região e contactos em `output/playwright/`. A composição da homepage e detalhe foi revista visualmente.
- Integridade ZIP: 119 ficheiros, 5 317 009 bytes; CRC e comparação de todos os bytes com `dist/` passaram. Inclui `.htaccess`; não inclui código-fonte, dependências ou documentação interna.

## Lighthouse local (antes da troca de domínio, mesma composição)

| Perfil | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|
| Móvel | 98 | 100 | 100 | 69 | 2,3 s | 0 | 0 ms |
| Desktop | 100 | 100 | 100 | 69 | 0,5 s | 0,001 | 0 ms |

A pontuação SEO é reduzida pelo noindex intencional da revisão. Medições de laboratório em localhost, não representam dados reais de visitantes ou o desempenho do alojamento final. INP de campo não medido. Relatórios JSON preservados.

## Correções concluídas

- Ícones locais resolvidos antes da build final.
- Animações de texto mantêm contraste durante a entrada.
- Foco da lightbox retido explicitamente entre os botões.
- Grelha de comodidades adapta-se ao texto ampliado.
- Scripts de QA ajustados ao formato de função requerido pelo Playwright CLI.

## Limitações e entrega

- Não houve upload, deploy, alteração de DNS ou de produção. Apache/LiteSpeed/SSL do alojamento não foram testados remotamente.
- Textos legais, direitos de imagens, condições de operação e ligações institucionais continuam pendentes; ver `editorial-pending.md`.
- O pacote permanece em modo revisão, com noindex. Não inclui autenticação.
- Gestos táteis implementados, mas não testados num dispositivo físico. Testes de browser em Chromium, sem certificação de todos os browsers/leitores de ecrã.
