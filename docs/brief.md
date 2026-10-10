# SOLGARVE — Prompt master para o Codex

Redesign completo do website institucional · Sem reservas · Brief de 28/09/2026

**Instrução de utilização:** entrega este ficheiro ao Codex com acesso ao projeto e, se disponíveis, o logótipo e as fotografias originais. O texto abaixo é o prompt integral de execução.

---

Codex, assume o papel de diretor criativo, UX/UI designer e developer sénior. Quero que implementes o novo website da Solgarve, apartamentos turísticos em Quarteira, Algarve. Entrega um website completo, responsivo, visualmente cuidado e pronto para revisão. Não te limites a um plano, wireframe ou homepage: executa todas as páginas e verifica o resultado no browser.

## 1. Objetivo e âmbito

Transforma o website atual numa presença contemporânea, luminosa e acolhedora, que transmita férias tranquilas no Algarve. O design deve valorizar a propriedade real, com fotografia protagonista, composição editorial e interações elegantes.

Nesta versão NÃO existe qualquer funcionalidade de reservas. Exclui motores de reservas, datas de entrada/saída, calendários de disponibilidade, preços, pagamentos, carrinhos, contas de hóspedes, integrações Turisbook e botões “Reservar”. Não substituas o motor por um formulário disfarçado de reserva. O objetivo é apresentar o alojamento e facilitar contactos gerais.

CTAs aprovados: “Conhecer os apartamentos”, “Explorar a Solgarve”, “Ver fotografias”, “Descobrir a região”, “Fale connosco”, “Como chegar”.

Conclui o desenvolvimento sem pedir aprovação entre etapas. Resolve decisões reversíveis de implementação autonomamente. Se faltarem credenciais ou dados reais, conclui tudo o que não depende deles e regista as pendências. Não publiques nem alteres o site de produção nesta tarefa.

## 2. Fontes e rigor do conteúdo

Usa estas páginas como fontes de informação e de inventário de imagens, não como modelo visual a copiar:

- https://www.solgarve.pt/en/
- https://www.solgarve.pt/en/apartment/
- https://www.solgarve.pt/en/services/
- https://www.solgarve.pt/en/contacts/
- https://www.solgarve.pt/en/apartment/apartment-t1-2-adults-2-children/
- https://www.solgarve.pt/en/apartment/one-bedroom-apartment-4pax/
- https://www.solgarve.pt/en/apartment/one-bedroom-apartment-2pax/
- https://www.solgarve.pt/en/apartment/one-bedroom-apartment-2pax-2/
- https://www.solgarve.pt/en/privacy-policy/

A análise de preparação conseguiu ler a homepage, serviços, contactos, privacidade e as primeiras três fichas. A listagem de apartamentos e a última ficha apresentaram uma verificação de acesso. Não assumas que páginas inacessíveis foram verificadas nem contornes proteções: usa as restantes fontes e regista a limitação.

Informação publicada no site, a revalidar antes do lançamento:

- Alojamento em Quarteira, com praia indicada a aproximadamente 800 metros.
- Espaços exteriores ajardinados e piscinas separadas para adultos e crianças.
- Três configurações legíveis: T1 para duas pessoas; T1 para quatro; T1 para dois adultos e duas crianças até aos 12 anos. As descrições referem um quarto, uma casa de banho, cozinha equipada, zona de estar com sofá-cama e varanda orientada para a piscina. Não as transformes em categorias Deluxe/Premium: podem ser variantes de ocupação da mesma tipologia.
- Serviços anunciados: receção permanente, limpeza diária, televisão por satélite, climatização no quarto, Wi-Fi gratuito nas zonas da receção e bar; churrasqueira partilhada, garagem e berço mediante pedido. Piscinas e bar indicam funcionamento entre as 09h e as 20h. Existem referências a passeios/bilhetes, transfers e, com marcação, massagens e babysitting. Não apresentes estes serviços adicionais como gratuitos ou sempre disponíveis; confirma condições e atualidade.
- Contactos: +351 289 323 299; +351 914 410 132; geral@solgarve.pt.
- Morada: Rua da Abelheira, Edifício Solgarve, 8125-173 Quarteira, Algarve, Portugal.
- Número de registo publicado: RNET 3498.

Problemas editoriais a resolver:

1. A homepage apresenta uma quarta opção com título de duas pessoas e capacidade de três. Não publiques uma ficha com capacidade presumida. Guarda-a como pendente, fora da navegação pública, até existir confirmação.
2. O site mistura idiomas e inclui texto de preenchimento. Reescreve integralmente o conteúdo editorial e separa traduções.
3. Existem etiquetas de Wi-Fi em fichas, mas a página de serviços limita a cobertura à receção/bar. Não prometas Wi-Fi nos apartamentos.
4. Não reutilizes as coordenadas publicadas sem validação; confirma a localização pelo endereço e estabelecimento.
5. Não copies referências legais a tratamentos de reservas/pagamentos para um site que não os realiza. A redação jurídica final e os dados do responsável precisam de validação pelo cliente.

Não inventes áreas em m², número total de apartamentos, acessibilidade física, políticas de animais, pequeno-almoço, avaliações, prémios, estrelas, tarifas ou distâncias exatas adicionais. Se uma informação for contraditória, omite a alegação pública e regista a questão num ficheiro de pendências.

## 3. Direção artística: “O Algarve, ao seu ritmo”

Cria um ambiente mediterrânico contemporâneo. A apresentação deve ser cuidada sem sugerir instalações de luxo que a propriedade não possui.

Paleta proposta:

| Função | Cor |
|---|---|
| Fundo marfim | #FAF8F3 |
| Areia suave | #EAE1D2 |
| Azul profundo, texto e navegação | #163B4A |
| Verde-mar, ações principais | #176B70 |
| Terracota, apontamentos | #BC7256 |

Verifica o contraste real de cada combinação. Terracota e areia não devem ser usados automaticamente para texto pequeno.

Tipografia: títulos em uma serif editorial como Cormorant Garamond; corpo, navegação e UI em Manrope. Usa fontes locais com licença adequada, poucos pesos e fallback competente. Títulos expressivos, corpo com boa leitura e linhas de aproximadamente 55–75 caracteres.

Layout: grelha de 12 colunas em desktop, largura máxima aproximada de 1280–1360 px, margens generosas, espaçamento vertical de 80–120 px no desktop e 48–72 px no mobile. Alterna composição 60/40, imagens panorâmicas e blocos editoriais. Evita uma sucessão monótona de cartões iguais.

Acabamento: cantos discretos de 8–16 px, linhas finas, sombras mínimas, ícones lineares consistentes. Uma pequena referência gráfica ao sol ou ao horizonte pode servir como assinatura visual. Mantém o logótipo real; não redesenhes a marca sem pedido. Caso o ficheiro falte, usa provisoriamente o nome em texto, sem inventar um símbolo oficial.

Evita estética de dashboard/SaaS, gradientes neon, glassmorphism, emojis, contadores inventados, grandes sombras, cartões excessivos e imagens genéricas de resorts.

## 4. Fotografias e assets

Inventaria o logótipo, a piscina, os exteriores, os quartos, a sala, a cozinha e a varanda. Usa fotografias reais da Solgarve nas secções sobre a propriedade. Mantém uma tabela de origem, destino, dimensões, utilização e direitos por confirmar. Usa os ficheiros fornecidos/autorizados pelo cliente e obtém cópias locais para evitar hotlinking.

Não uses IA para inventar ou alterar quartos, piscinas, vistas ou instalações. Não substituas uma fotografia de um apartamento por uma imagem de outro hotel. Para a região, admite fotografia licenciada e identificada da localização correta.

Prepara AVIF/WebP e fallback, tamanhos responsivos, proporções reservadas e pontos focais por fotografia. Dá prioridade à imagem principal e lazy-load às restantes. Não amplifiques imagens pequenas até ficarem desfocadas. Se faltar resolução suficiente, usa enquadramentos menores e assinala os originais necessários.

Se não conseguires obter imagens, continua a implementação com placeholders locais explicitamente identificados apenas no ambiente de revisão. Não declares a entrega pronta para publicação enquanto existirem placeholders.

## 5. Páginas e navegação

Implementa PT-PT e inglês, com rotas /pt/ e /en/, conteúdo completo em ambos e seletor que preserve a página equivalente. A raiz pode redirecionar para PT de forma previsível; não forces mudanças de idioma por localização. Usa slugs traduzidos e metadados próprios.

Menu: Início, Apartamentos, Serviços, Galeria, Descobrir o Algarve, Contactos. CTA persistente “Fale connosco”. Em mobile, menu acessível e compacto; não ocupar desnecessariamente o ecrã com barras fixas.

### Homepage

1. **Header e hero:** fotografia real ampla da piscina/exterior, altura aproximada de 85svh no desktop e conteúdo confortável no mobile. Header inicialmente integrado sobre a imagem, com fundo legível ao fazer scroll. Eyebrow “QUARTEIRA · ALGARVE”; H1 “O Algarve, ao seu ritmo.”; apoio “Apartamentos para viver dias tranquilos, entre a piscina e o mar.”; CTA principal para apartamentos e secundário para galeria. Confirma sempre contraste e recortes. Sem vídeo obrigatório e sem slideshow automático.
2. **Introdução editorial:** título “Tempo para abrandar. Espaço para ficar.”, texto curto e composição assimétrica com duas fotografias reais. Apresenta a experiência e localização com linguagem humana.
3. **Apartamentos:** imagens grandes e configurações claramente identificadas, com capacidade verificada e ligação a detalhes. Sem preços e sem disponibilidade.
4. **Piscina e exterior:** bloco panorâmico, secção visual de pausa e uma descrição curta. Usa “Os dias sabem melhor ao sol.” como direção de copy, sem sobrepor texto a zonas ilegíveis.
5. **Comodidades:** quatro a seis destaques verificados com ícones e ligação para a página completa. Não sobrecarregar a homepage com todas as condições.
6. **Explorar a região:** composição editorial com Quarteira, Vilamoura e outras sugestões verificadas. Cada item deve ter destino útil, nunca botão sem ação.
7. **Galeria teaser:** mosaico equilibrado de quatro a seis imagens e link para galeria.
8. **Contacto final:** “Comece por conhecer o seu próximo refúgio.” com contacto geral, sem linguagem de reserva.
9. **Footer:** marca, morada, contactos clicáveis, navegação, idioma, registo turístico e ligações legais confirmadas.

### Apartamentos: listagem e detalhe

Listagem editorial com título “O seu espaço no Algarve.”. Evita filtros quando existem apenas três opções. Explica que as opções correspondem às configurações publicadas, sem afirmar unidades ou categorias distintas sem confirmação.

Cada detalhe inclui título claro, fotografia principal, galeria com lightbox, capacidade validada, divisão dos espaços, descrição original e comodidades sustentadas pela fonte dessa ficha. CTA “Tem alguma questão? Fale connosco.”. Breadcrumbs, ligações às restantes configurações e URL estável.

Não incluir calendário, calculadora de estadia, disponibilidade ou sidebar de reserva. Não generalizar equipamento de uma ficha às outras sem evidência.

### Serviços

Organiza em “Durante a sua estadia”, “Ao ar livre” e “Serviços mediante pedido”. Apresenta condições junto ao serviço, incluindo limitações de Wi-Fi e marcação dos extras. Evita repetições da fonte. Horários e serviços de operação devem ficar centralizados para atualização e marcados internamente para confirmação.

### Galeria

Categorias apenas quando existirem fotografias suficientes: Todos, Apartamentos, Piscinas, Exterior. Grelha editorial com alturas controladas e sem saltos de layout. Lightbox acessível: teclado, Escape, anterior/seguinte, contador, legenda, foco retido e devolvido ao fechar. Suporte tátil sem impedir scroll normal. Botões com nomes acessíveis. Sem autoplay.

### Descobrir o Algarve

Desenvolve a atual secção de proximidades numa página própria. Sugestões: praia de Quarteira, Vilamoura, Aquashow e mercado de Loulé. Mantém textos curtos, imagens corretas e ligações verificadas. Não inventes tempos de viagem, horários, preços nem parcerias. Não construir bilheteira nem promover venda integrada de experiências.

### Contactos

Telefone fixo e móvel com tel:, email com mailto:, morada e “Como chegar” com destino validado. Não presumir que o telemóvel tem WhatsApp.

Privilegia uma versão funcional sem serviços externos: contactos diretos e ligação para mapa, sem iframe automático. Formulário de contacto geral só se houver backend de envio configurável e real. Nesse caso: nome, email, assunto e mensagem; telefone opcional; validação no servidor, limites de tamanho, honeypot, rate limiting e estados acessíveis. Nunca recolher datas, hóspedes ou cartões. Nunca simular envio bem-sucedido: sucesso apenas após aceitação pelo serviço de email. Sem credenciais, mostrar contactos diretos em produção e documentar a configuração pendente; não expor formulário inutilizável.

### Páginas legais e 404

Inclui estrutura de privacidade coerente com a implementação e política de cookies se aplicável. Não inventes responsável, NIF, prazos de retenção ou fornecedores. Mantém versões por validar como rascunho identificado e documenta o bloqueio de lançamento. Recupera e valida os links institucionais existentes de reclamações e resolução de litígios. Não declares conformidade jurídica garantida.

Cria uma página 404 própria da marca, com retorno útil à navegação.

## 6. Movimento e interação

Usa animação para dar qualidade ao percurso: entrada discreta de títulos, revelação de imagens, transições de menu e hover fotográfico suave. Durações habituais entre 180 e 600 ms. Anima opacity e transform; evita layout thrashing.

Parallax apenas ligeiro em desktop e dispensável no mobile. Respeita prefers-reduced-motion integralmente. Conteúdo visível se JavaScript falhar. Sem scroll hijacking, cursores personalizados, som automático, loaders artificiais ou secções que prendem o visitante. O movimento não pode atrasar o acesso à informação.

## 7. Implementação técnica

Primeiro inspeciona o repositório, lê os ficheiros AGENTS.md aplicáveis e verifica o estado do Git. Preserva alterações existentes do utilizador. Trabalha numa branch dedicada, quando houver repositório Git. Usa as ferramentas disponíveis para editar os ficheiros, executar comandos e validar o resultado; não entregues apenas blocos de código na conversa. Não faças push, merge ou deploy sem autorização para essas ações. Se existir uma stack funcional, mantém-na sempre que possível. Não migres um WordPress ou outro projeto existente só por preferência tecnológica.

Em projeto novo, usa Astro com TypeScript, geração estática e CSS com tokens, com ilhas interativas apenas onde necessário. Justificação: é um site institucional sobretudo editorial e fotográfico. Usa versões estáveis compatíveis verificadas no momento da implementação. Não introduzas base de dados, login, painel administrativo ou CMS externo sem necessidade. Usa conteúdo estruturado e documenta a edição.

Se o ambiente já for React/Next.js, aplica os mesmos princípios: páginas indexáveis, renderização adequada e mínimo JavaScript no cliente. Não adicionar várias bibliotecas de animação; CSS e IntersectionObserver devem resolver a maior parte do movimento.

Centraliza marca, contactos, idiomas, navegação, apartamentos, serviços, destinos e metadados das fotografias. Tipos de dados devem distinguir confirmado/pendente e impedir renderização pública de itens pendentes. Prepara componentes reutilizáveis como Header, Footer, EditorialSection, ApartmentCard, AmenityList, Gallery, Lightbox e ContactPanel. Não criar uma arquitetura de plugins de reservas nesta versão.

Entrega lockfile, scripts de desenvolvimento/build/verificação, .env.example apenas se necessário, README e configuração de deployment compatível com alojamento convencional. Não presumir Vercel, serviço pago ou credenciais disponíveis. Não guardar segredos no repositório.

## 8. SEO, acessibilidade e desempenho

Metadados PT/EN próprios por página, H1 único, estrutura semântica, canonical, hreflang e sitemap com páginas publicáveis. O ambiente de revisão deve impedir indexação; produção deve ter configuração explícita e correta.

Usa dados estruturados de alojamento e breadcrumbs apenas com informações confirmadas. Não incluir estrelas, reviews, preços, geo ou classificações inventadas. Cria um mapa de migração dos URLs existentes, preservando rotas quando fizer sentido. Documenta como tratar URLs antigos de reservas descontinuados sem reintroduzir o fluxo e sem redirecionar todas as páginas indiscriminadamente para a homepage.

Alvo WCAG 2.2 AA: navegação por teclado, skip link, foco visível, contraste, labels, alt text informativo, botões táteis adequados e suporte a zoom. Testa menu e lightbox manualmente com teclado. Não usar links vazios ou divs clicáveis sem semântica.

Orçamento de desempenho: evitar bibliotecas pesadas, otimizar fotografia e fontes, reservar dimensões. Alvos após medição: LCP ≤ 2,5 s, CLS ≤ 0,1 e INP ≤ 200 ms em condições representativas. Distingue métricas laboratoriais de dados reais; não prometer valores sem medição. Lighthouse ≥ 90 em categorias relevantes é um objetivo, não um resultado a inventar.

Evita trackers por defeito. Carregamentos externos não essenciais apenas de acordo com as escolhas de privacidade implementadas. Não instalar um banner de cookies decorativo que não controla nada.

## 9. Execução e verificação obrigatórias

Executa numa sequência contínua: auditoria das fontes e assets, estrutura de conteúdo, design system, homepage, restantes páginas, traduções, interações, verificação e correções. Não pares no fim da primeira página nem entregues uma lista de tarefas como se fosse o site concluído.

Verifica em 360, 390, 768, 1024 e 1440 px:

- Nenhum overflow horizontal, corte de texto ou sobreposição indesejada.
- Todas as rotas, ligações, CTAs, imagens e idiomas funcionam.
- O idioma conserva a página equivalente e não mistura copy.
- Galeria, teclado, menu, foco e reduced motion funcionam.
- Todas as páginas têm conteúdo final, exceto pendências explicitamente isoladas.
- Nenhuma funcionalidade, dependência, iframe ou CTA de reservas permanece.
- Não existem erros de consola, formulários simulados ou alegações inventadas.
- Build, tipos e verificações existentes passam; corrige falhas relacionadas com o trabalho.

Usa screenshots reais do site implementado para avaliar composição, recortes, contraste e ritmo visual. Não gerar mockups para substituir a verificação. Faz testes dirigidos aos percursos críticos, incluindo ausência de fluxo de reservas e comportamento do envio se existir.

Mantém um checkpoint em docs/implementation-status.md com o que foi concluído, os problemas reais e a próxima ação concreta. Se a sessão for interrompida, retoma a partir desse estado. Antes de terminar, compara a implementação com este brief e corrige as lacunas de âmbito que ainda consigas resolver. Não declares testes ou inspeções que não executaste.

## 10. Entrega

Entrega o código completo, preview local quando possível, screenshots desktop/mobile das páginas principais, README de execução e manutenção, inventário de assets/fontes, mapa de URLs e um ficheiro de pendências editoriais/técnicas. Resume os testes efetivamente realizados e qualquer limitação.

Critério final: deve parecer um website de alojamento desenhado especificamente para a Solgarve, com identidade mediterrânica, fotografia real, conteúdo fiável e experiência cuidada em telemóvel. O visitante percebe onde está o alojamento, como são os apartamentos, que serviços existem e como contactar a equipa. A versão entregue não permite reservar.

Começa agora pela inspeção do projeto e das fontes, define a direção visual e avança até à implementação e revisão completas.
