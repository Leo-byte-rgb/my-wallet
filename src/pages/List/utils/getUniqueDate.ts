import { IData } from "../../../types/Data";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const getUniqueYearsByData = (data: IData[]) => {
  const years: Number[] = [];
  data.forEach(({ date }) => {
    const year = new Date(date).getFullYear();
    if (!years.includes(year)) years.push(year);
  });
  return years.map((year) => ({ value: String(year), label: String(year) }));
};

export const getUniqueMonthsByData = () => {
  return months.map((month, index) => ({
    value: index + 1,
    label: month,
  }));
};
