export const formatAmount = (amount: string) =>
  `R$: ${amount.replace(".", ",")}`;

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("pt-br");
