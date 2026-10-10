# Mapa de URLs

As rotas novas usam barras finais. A raiz encaminha previsivelmente para `/pt/`, sem geolocalização. O seletor de idioma mantém a página e a configuração do apartamento.

| Existente | Nova / ação proposta |
|---|---|
| `/` | 302 `/pt/` |
| `/en/` | Preservada |
| `/en/apartment/` | 301 `/en/apartments/` |
| `/en/services/` | Preservada |
| `/en/contacts/` | Preservada |
| `/en/apartment/one-bedroom-apartment-2pax/` | 301 `/en/apartments/one-bedroom-two-guests/` |
| `/en/apartment/one-bedroom-apartment-4pax/` | 301 `/en/apartments/one-bedroom-four-guests/` |
| `/en/apartment/apartment-t1-2-adults-2-children/` | 301 `/en/apartments/one-bedroom-two-adults-two-children/` |
| `/en/apartment/one-bedroom-apartment-2pax-2/` | Sem equivalente confirmado. 410 após revisão editorial; não redirecionar para configuração presumida. |
| `/en/privacy-policy/` | 301 `/en/privacy/` apenas após validação jurídica do destino |
| URLs antigas de reservas e arquivos `turisbook-*` | Inventariar caminhos exatos em sitemap/logs antes de publicar; devolver 410 para fluxos descontinuados. Se necessário, página informativa com contactos gerais e estado 410. Não reconstruir fluxo nem redirecionar tudo para homepage. |

Novas páginas: `/pt/galeria/`, `/en/gallery/`, `/pt/descobrir-o-algarve/`, `/en/discover-the-algarve/` e páginas legais traduzidas. Todas as correspondências estão em `src/data/site.ts` e `src/data/content.ts`.

`deployment/apache.htaccess.example` contém regras de exemplo para rotas conhecidas. Não estão aplicadas à produção. Em Nginx, acrescentar os mesmos redirects explícitos após validar a configuração real. A página `/404.html` deve ser servida com HTTP 404.
