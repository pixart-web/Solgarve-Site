# Estado da implementação

29/09/2026 — Implementação e revisão local concluídas. ZIP de upload solicitado para `solgarve.pixart.pt` entregue; sem upload, deploy, push ou merge.

- Astro + TypeScript, 22 páginas PT/EN, raiz e 404.
- Todas as páginas previstas, fotografias reais, fontes locais, galeria acessível e contactos diretos; nenhum fluxo de reservas.
- URLs de publicação centralizados em `src/data/deployment.json` e atualizados para o subdomínio.
- Check/build/testes estáticos passaram. 110 combinações rota/largura passaram; nove auditorias axe sem violações. Correções de foco e zoom revalidadas.
- ZIP: `entrega/solgarve-pixart-upload.zip`, pronto para extração na raiz do subdomínio. Instruções em `entrega/INSTRUCOES-UPLOAD.txt`; checksum em `entrega/SHA256.txt`.
- Relatório completo: `docs/qa-report.md`.

Próxima ação externa: o utilizador efetua upload e ativa HTTPS; verificar então o comportamento do alojamento. Manter noindex e rascunhos legais identificados até resolver `docs/editorial-pending.md`. Não dar por validados direitos ou condições sem confirmação real.
