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

- **Formas de pagamento** no FAQ (está "Pix, dinheiro e cartões").
- **Bairros de entrega** — hoje só o Parque Trindade I é real, o resto é
  `[Bairro vizinho 1..5]`. Preencha ou apague o `<ul class="chips">`.
- **Links de Instagram e Facebook** no rodapé (estão `#`).
- **Domínio** no `canonical` e no `og:url` (está um de exemplo).

### 2. Imagens

| Arquivo                   | Proporção | Uso                           | Situação |
|---------------------------|-----------|-------------------------------|----------|
| `hero-farmaceutica.webp`  | 1600×1000 | Fundo do hero                 | ✅ definitiva (de `hero (1).png`) |
| `fachada.webp`            | 800×600   | Seção "Sobre"                 | ✅ definitiva (de `faixada.png`) |
| `logo.webp`               | 300×300   | Logo no hero                  | ✅ definitiva (de `logo-transp.png`) |
| `logo-branco.webp`        | 260×260   | Logo no rodapé (fundo escuro) | ✅ definitiva (de `logo-transp.png`) |

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

## Regras de texto (Google Ads)

O site é página de destino de anúncios do Google. A política de Saúde e medicamentos
do Google Ads permite farmácia no Brasil desde que a página **não promova
medicamentos de venda sob prescrição**. Por isso, em out/2026 saíram do site:

- qualquer menção a **receita** (aceitar receita, trazer receita, foto da receita);
- a seção e o FAQ de **aplicação de injetáveis** (e a imagem `servico-injetaveis.webp`);
- doenças e gratuidade no Farmácia Popular (pressão, diabetes, asma, "gratuitos",
  "até 90% de desconto");
- "Peça seus medicamentos" junto de entrega (agora é "faça seu pedido");
- classes de remédio (analgésicos, antitérmicos) e alegação de "imunidade".

Ao editar o site, **não reintroduza** esses termos, nomes de medicamentos ou
promessa de tratamento. Na dúvida, fale de "pedido", "atendimento" e "produtos".

## Notas de implementação

- A seção de categorias usa **linhas de largura total** com ícones de traço em SVG
  inline (frasco, documento, cápsulas, pote, gota e scooter), seguindo o padrão do
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
