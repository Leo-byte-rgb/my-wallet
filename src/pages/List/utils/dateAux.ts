export const getMonth = (date: string): number => {
  return Number(new Date(date).getMonth() + 1);
};
export const getYear = (date: string): number => {
  const parsed = Date.parse(date);
  return new Date(parsed).getFullYear();
};
