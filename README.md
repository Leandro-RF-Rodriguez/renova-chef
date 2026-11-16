# Renova Chef 🍌🍊🥕

Site do projeto de extensão **Renova Chef** (eixo economia sustentável): receitas com cascas de frutas e legumes para reduzir o desperdício de alimentos em uma confeitaria local.

## Funcionalidades

- **Receitas completas** com ingredientes, modo de preparo, dicas e fonte. Abrem em janela própria, têm link direto (`#receita-<id>`) e filtro por cascas de frutas ou de legumes.
- **Impressão** de cada receita em formato limpo, só com o conteúdo.
- **Checklist de higienização** baseado na RDC nº 216/2004 da Anvisa.
- **Gerador de etiqueta de ingredientes** com datas de fabricação e validade, alergênicos e QR Code que leva direto à receita. Imprime 4 etiquetas por folha.
- **Controle do desperdício**: registro das cascas aproveitadas e descartadas, salvo no navegador (localStorage), com totais e exportação em CSV para Google Sheets ou Excel.
- Layout responsivo (celular, tablet e computador), menu mobile e botão de compartilhar.

Tudo em HTML, CSS e JavaScript puro, sem frameworks nem etapa de build.

## Estrutura

```
index.html
css/style.css
js/main.js      ← as receitas ficam no array RECIPES, no início do arquivo
```

## Publicar no GitHub Pages

1. Crie um repositório (por exemplo, `renova-chef`) e envie estes arquivos para a branch `main`.
2. No repositório, abra **Settings › Pages**.
3. Em **Source**, escolha **Deploy from a branch**, selecione `main` e a pasta `/ (root)` e salve.
4. Em cerca de um minuto o site fica disponível em `https://<seu-usuario>.github.io/renova-chef/`.

## Adicionar ou trocar receitas e fotos

Edite o array `RECIPES` em `js/main.js`. Cada receita tem `title`, `ingredients`, `steps`, `image`, `credit`, `source` e os dados da etiqueta (`labelIngredients`, `allergens`, `storage`, `shelfDays`).
Para usar fotos próprias, coloque a imagem na pasta `img/` e troque o campo `image` por `img/nome-da-foto.jpg`.

## Fontes e créditos

- Prefeitura do Rio de Janeiro. *Cartilha de Receitas de Aproveitamento Integral dos Alimentos* (Cadernos de Promoção da Saúde, 2024). Licença CC BY-NC 4.0. Receitas: bolo de casca de banana e casca de laranja cristalizada (texto adaptado).
- Sesc/RS. *Receitas Mesa Brasil*, Santa Maria, 2018. Receita: bolo de cenoura com laranja (texto adaptado).
- Anvisa. RDC nº 216, de 15 de setembro de 2004.
- ONU Brasil. Objetivo de Desenvolvimento Sustentável 12.
- Fotos ilustrativas do [Unsplash](https://unsplash.com/license): okeykat, Diego Arenas de Rodrigo, Almas Salakhov e Orkun Orcan.
- QR Codes gerados por [goqr.me / api.qrserver.com](https://goqr.me/api/).

Projeto acadêmico, sem fins comerciais.
