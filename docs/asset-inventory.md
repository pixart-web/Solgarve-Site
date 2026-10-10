# Inventário de imagens e fontes

Recolha: 28/09/2026. Fotografias reais do website oficial, sem IA ou alteração de instalações. Direitos de reutilização a confirmar pelo cliente antes do lançamento.

| Asset | Origem | Dimensões | Destino / utilização | Direitos |
|---|---|---|---|---|
| pool | [15335547.jpg](https://www.solgarve.pt/wp-content/uploads/2019/06/15335547.jpg) | 1024 × 680 | public/images/pool-{400,720,1024}.avif/.webp + pool.jpg; Pool hero | Por confirmar |
| bedroom | [3936-003.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3936-003.jpg) | 1200 × 801 | public/images/bedroom-{400,720,1200}.avif/.webp + bedroom.jpg; Apartment gallery primary bedroom | Por confirmar |
| bedroom2 | [3937-002.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3937-002.jpg) | 1200 × 801 | public/images/bedroom2-{400,720,1200}.avif/.webp + bedroom2.jpg; Apartment gallery bedroom reverse angle | Por confirmar |
| bedroom3 | [3941-012.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3941-012.jpg) | 1200 × 801 | public/images/bedroom3-{400,720,1200}.avif/.webp + bedroom3.jpg; Bedroom gallery | Por confirmar |
| living | [3942-013.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3942-013.jpg) | 1200 × 801 | public/images/living-{400,720,1200}.avif/.webp + living.jpg; Living and dining gallery | Por confirmar |
| kitchen | [3944-011.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3944-011.jpg) | 1200 × 801 | public/images/kitchen-{400,720,1200}.avif/.webp + kitchen.jpg; Equipped kitchen gallery | Por confirmar |
| bathroom | [3943-004.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3943-004.jpg) | 1200 × 801 | public/images/bathroom-{400,720,1200}.avif/.webp + bathroom.jpg; Bathroom gallery | Por confirmar |
| balcony | [3940-006.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3940-006.jpg) | 1200 × 801 | public/images/balcony-{400,720,1200}.avif/.webp + balcony.jpg; Wide balcony overview or secondary hero | Por confirmar |
| terrace | [3984-007.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3984-007.jpg) | 1200 × 801 | public/images/terrace-{400,720,1200}.avif/.webp + terrace.jpg; Shared outdoor seating gallery | Por confirmar |
| reception | [3985-010.jpg](https://www.solgarve.pt/wp-content/uploads/turisbook/3985-010.jpg) | 1200 × 801 | public/images/reception-{400,720,1200}.avif/.webp + reception.jpg; Reception gallery | Por confirmar |
| beach | [15336227.jpg](https://www.solgarve.pt/wp-content/uploads/2019/06/15336227.jpg) | 1205 × 900 | public/images/beach-{400,720,1205}.avif/.webp + beach.jpg; Nearby Quarteira beach; not a property image | Por confirmar |

Originais preservados em `assets/originals/`. Dimensões, tamanhos responsivos e pontos focais em `src/data/image-sizes.json` e `src/data/content.ts`. Sem ampliação artificial dos ficheiros. `Photo.astro` usa AVIF, WebP e JPEG; `priority` só nas imagens principais, restantes com lazy loading.

Marca: `public/images/logo.png` (200 × 135), origem https://www.solgarve.pt/wp-content/uploads/2019/06/cropped-logo-1.png; favicon `public/favicon.png` (83 × 135), símbolo oficial de https://www.solgarve.pt/wp-content/uploads/2019/06/icone.png. Não redesenhados.

## Fontes e ícones

- Cormorant Garamond: 400 normal/itálico e 500 normal, subset latino, servida localmente via @fontsource. OFL em docs/licenses/Cormorant-Garamond-OFL.txt.
- Manrope: 400 e 600 normal, subset latino, local. OFL em docs/licenses/Manrope-OFL.txt.
- Tabler Icons: quatro SVG outline originais da biblioteca, cópias em src/icons; MIT em docs/licenses/Tabler-MIT.txt.
- As versões exatas de todos os pacotes estão no package-lock.json.
