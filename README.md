# LP Drogaria Santa Mônica

Landing page estática (HTML + CSS + um pouco de JS). Sem build, sem dependências.

**Drogaria Santa Mônica** — Av. Bela Vista, S/N, QD. 35, LT. 20, Parque Trindade I,
Aparecida de Goiânia/GO, CEP 74921-198.
Tele-entregas (62) 3988-1500 · WhatsApp (62) 98222-2173 · Todos os dias, 07h40–21h45.

## Rodar localmente

```bash
npx http-server -p 8099
# abre http://localhost:8099
```

Ou simplesmente abra `index.html` no navegador.

## Estrutura

```
index.html               página inteira (conteúdo + SEO + schema.org)
css/style.css            estilos
design-system/tokens.css cores, fontes, espaçamentos
js/main.js               acordeão do FAQ + ano do rodapé
img/                     imagens (hoje são placeholders)
```

Todos os botões de WhatsApp (10 no total) apontam para
`https://wa.me/5562982222173?text=vim%20pelo%20site%20preciso%20de%20atendimento`.
Para mudar o número ou a mensagem, troque em todos — é o mesmo link repetido.

## O que ainda falta

### 1. Confirmar antes de publicar

A página **afirma** estas coisas. Se alguma não for verdade, corrija ou apague:

- **Aferição de pressão, teste de glicemia e aplicação de injetáveis** — a seção de
  serviços veio da estrutura do site de referência. Confirme que a Santa Mônica
  oferece os três; se não, apague o `<article class="card">` correspondente e o
  item no FAQ.
- **Formas de pagamento** no FAQ (está "Pix, dinheiro e cartões").
- **Bairros de entrega** — hoje só o Parque Trindade I é real, o resto é
  `[Bairro vizinho 1..5]`. Preencha ou apague o `<ul class="chips">`.
- **Links de Instagram e Facebook** no rodapé (estão `#`).
- **Domínio** no `canonical` e no `og:url` (está um de exemplo).

### 2. Imagens

| Arquivo                   | Proporção | Uso                           | Situação |
|---------------------------|-----------|-------------------------------|----------|
| `hero-farmaceutica.webp`  | 1600×1000 | Fundo do hero                 | ✅ definitiva (de `hero (1).png`) |
| `servico-pressao.webp`    | 600×400   | Card de pressão               | ⚠️ baixada do site de referência |
| `servico-glicemia.webp`   | 600×400   | Card de glicemia              | ⚠️ baixada do site de referência |
| `servico-injetaveis.webp` | 600×400   | Card de injetáveis            | ⚠️ baixada do site de referência |
| `fachada.webp`            | 800×600   | Seção "Sobre"                 | ✅ definitiva (de `faixada.png`) |
| `logo.webp`               | 300×300   | Logo no hero                  | ✅ definitiva (de `logo-transp.png`) |
| `logo-branco.webp`        | 260×260   | Logo no rodapé (fundo escuro) | ✅ definitiva (de `logo-transp.png`) |

**Sobre as três imagens de serviço (⚠️):** foram baixadas de
`drogariamedfarmapalmas.com.br` a pedido. São fotos de banco de imagens que a
outra farmácia provavelmente licenciou — usá-las no site da Santa Mônica é um
risco jurídico real (bancos como Shutterstock e Freepik cobram por uso não
licenciado). O ideal é trocar por fotos próprias da loja, que ainda convertem
melhor por serem reais. São elas:

- `aferir-pressao.webp`, `teste-de-glicemia.webp`, `aplicacao-de-injetaveis.webp`

O hero tem um degradê escuro da esquerda para a direita — se for trocar, escolha
uma foto com a pessoa/produto à **direita** do enquadramento.

**Sobre o logo:** usei `logo-transp.png` (fundo transparente, 1024×1024) para o
hero e para o rodapé, porque os dois ficam sobre fundo escuro — o símbolo branco
com a cruz vermelha se destaca sem a borda quadrada de "adesivo". O `logo.png`
(quadrado azul) não foi usado no site, mas serve para redes sociais, favicon e
onde precisar de fundo sólido. O logo é só o símbolo (não tem o nome escrito);
se quiser uma versão com "Drogaria Santa Mônica" ao lado do símbolo, é só me passar.

Os arquivos originais na raiz (`hero (1).png`, `faixada.png`, `logo.png`,
`logo-transp.png`) são as fontes que você enviou — já foram convertidos para
`img/` e podem ser apagados ou guardados como backup.

## Notas de implementação

- A seção de categorias usa **linhas de largura total** com ícones de traço em SVG
  inline (frasco, receita, cápsulas, pote, gota e scooter), seguindo o padrão do
  layout de referência. Os ícones são desenhados à mão no próprio HTML — não há
  dependência de fonte de ícones. A espessura do traço é controlada pelo CSS
  (`.feature__icon { stroke-width }`), que vence o atributo do SVG.
- A bandeira do Brasil na faixa da Farmácia Popular é **SVG inline**, não emoji —
  o Windows renderiza `🇧🇷` como o texto "BR".
- O bloco de destaque no hero usa os **12 anos** de casa. O site de referência usava
  a nota do Google (4.7); como não temos a nota da Santa Mônica, os 12 anos entraram
  no lugar. Se você tiver a nota real, dá para voltar ao formato original.

## Sobre a referência

O design (paleta, tipografia, ritmo das seções) foi extraído de
`drogariamedfarmapalmas.com.br` com a skill `extract-design-system` +
leitura do CSS do kit Elementor. Os **textos foram reescritos** e as **imagens não
foram copiadas** — layout e estilo são a referência, o conteúdo é próprio.
