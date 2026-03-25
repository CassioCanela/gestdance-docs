# GUIA DO USUÁRIO (RH / Folha)

## A) Importar chamadas (Pedagógico → Folha de Ponto)
Rota: /rh/importar-chamadas

1. Selecione o período (data início e data fim).
2. (Opcional) Filtre por turma.
3. Clique em Buscar chamadas.
4. Marque as sessões a importar.
5. Clique em Importar selecionadas.

Validações:
- Sessão já importada (dedup) não será importada novamente.
- Se for substituição, o campo `aprovado_diretor` precisa estar `true`.

## B) Comissão de alunos (cálculo + override)
Rota: /rh/comissao-alunos

1. Selecione o período.
2. Selecione o professor.
3. Clique em Calcular comissão.
4. Revise:
   - Quem tem direito (≥ 1/3 presenças).
   - Teto por turma (cap por classes).
   - Rateio por sessão.
5. Se necessário, use Ajustar para mudar valores individuais.
6. Clique em Confirmar e registrar para gerar `folha_lancamentos`.

## C) Folha de ponto e lançamentos
Páginas:
- /rh/folha-ponto
- /rh/folha-lancamentos

Use para auditoria e conferência do que foi importado/registrado.

## D) Descontos (registro na folha)
Rota: `/financeiro/descontos`

Use para calcular e registrar INSS/IR/Sindical (com override validado) em `folha_lancamentos`.

## E) Fechar folha (RH)
Rota: `/rh/folha-fechamento`

Use para fechar/gerenciar o período após a conferência dos lançamentos (folha de ponto e folha de lançamentos).

