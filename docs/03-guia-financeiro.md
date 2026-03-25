# GUIA DO USUÁRIO (Financeiro)

## A) Descontos legais (INSS/IR/Sindical)
Rota: `/financeiro/descontos`

1. Selecione o período (`periodo_inicio` e `periodo_fim`).
2. Selecione o `funcionário` (vínculo em `funcionarios_remuneracao`).
3. Informe o `salário bruto`.
4. Clique em `Calcular descontos`.
5. Se necessário, ajuste valores (override) somente dentro dos limites legais.
6. Clique em `Registrar na folha`.

O que será criado:
- `folha_lancamentos` com `tipo_lancamento` = `desconto_inss`, `desconto_ir`, `contribuicao_sindical`.
- `origem: manual` e `valor` negativo.

## B) Fechamento caixa diário
Rota: `/financeiro/fechamento-caixa-diario`

1. Selecione a `data fechamento`.
2. Liste sessões PDV e abra o fechamento por sessão (`Abrir fechamento`).
3. Feche cada sessão PDV (`Fechar PDV`).
4. Clique em `Fechar escola` para criar/atualizar o agregado da escola.

Regras:
- Não é permitido fechar a escola se houver PDVs `abertos` no dia.
- `status` controla reabertura/alterações (`aberto`, `fechado`, `conciliado`).

