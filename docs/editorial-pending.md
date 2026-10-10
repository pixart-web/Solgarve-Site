# Pendências antes do lançamento

Esta entrega é para revisão local, não para publicação. Não existem fotografias geradas nem placeholders de conteúdo editorial. Os rascunhos jurídicos são identificados e excluídos do sitemap.

## Bloqueios de lançamento

1. **Jurídico:** validar entidade responsável e NIF, destinatários/fornecedores, bases e finalidades aplicáveis, conservação, exercício de direitos e contacto de privacidade. A política antiga contém dados pessoais do responsável e trata reservas/pagamentos; não foi copiada. Confirmar se esses dados continuam atuais. O email antigo de privacidade difere do contacto geral.
2. **Imagens e marca:** confirmar autorização para todas as imagens recuperadas do website oficial. A fotografia regional foi publicada pela Solgarve; confirmar autoria/licença e localização exata antes de publicar. O logótipo oficial é preservado sem alteração.
3. **Operação:** reconfirmar receção permanente, limpeza diária, horários de piscinas/bar, garagem, berços, transfers, passeios, massagens e babysitting; disponibilidade, custos e condições. A informação está centralizada em `src/data/content.ts`. Não é prometido Wi-Fi dentro dos apartamentos.
4. **Reclamações e RAL:** não foram encontradas ligações institucionais verificáveis na homepage, contactos e política de privacidade consultadas. Obter ligação correta do estabelecimento ao Livro de Reclamações e identificar a entidade de resolução alternativa de litígios aplicável. Não associar um centro presumido.
5. **Alojamento:** escolher o alojamento convencional, confirmar logs técnicos, fornecedores e retenção; rever os textos de privacidade/cookies para essa configuração. Nenhum tracker, iframe, formulário ou cookie é introduzido pela aplicação.

## Conteúdo isolado

- Quarta ficha: título de duas pessoas e capacidade de três. Ambas as páginas ficaram acessíveis na auditoria de 29/09/2026, sem contornar proteções. A contradição mantém-se; item `pending` não gera rota nem navegação.
- Confirmar se as três opções são exclusivamente variantes de ocupação; não são apresentadas como Deluxe/Premium nem como unidades distintas.
- Planta, áreas, acessibilidade, animais, pequeno-almoço, número de unidades e distâncias adicionais não são afirmados.
- A distância de aproximadamente 800 m à praia não foi incluída na copy para evitar sugerir percurso medido.

## Melhorias de assets

- Solicitar original da fotografia da piscina com pelo menos 1920 px. A fonte recuperada tem 1024 × 680; a implementação não faz upscale de ficheiros, mas o hero em ecrãs grandes fica limitado pela resolução de origem.
- Fotografias interiores têm 1200 × 801, suficientes para enquadramentos médios; idealmente fornecer originais para monitores de alta densidade.
- Solicitar versão vetorial oficial do logótipo, cuja versão disponível é 200 × 135.
- Fotografias adicionais licenciadas de Vilamoura, Loulé e Aquashow são opcionais; as sugestões atuais usam composição tipográfica e links oficiais, sem imagens genéricas incorretas.

## Contacto

O site funciona por `tel:` e `mailto:`. Não há backend ou formulário a configurar nesta versão; não existe sucesso simulado. Não se presume WhatsApp.

## Aprovação

Após resolver os bloqueios, atualizar as páginas legais, ligações institucionais e o inventário; só depois assinalar os campos em `launch-readiness.json`. A configuração bloqueia `PUBLIC_SITE_MODE=production` enquanto algum campo estiver por aprovar. Não fazer deploy como parte desta tarefa.
