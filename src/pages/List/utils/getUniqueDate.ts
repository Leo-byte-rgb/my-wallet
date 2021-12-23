import { IData } from '../../../types/Data';

export const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const getUniqueYearsByData = (data: IData[]) => {
  const years: Number[] = [];
  data.forEach(({ date }) => {
    const year = new Date(date).getFullYear();
    if (!years.includes(year)) years.push(year);
  });
  return years.map((year) => ({ value: String(year), label: String(year) }));
};

export const getUniqueMonthsByData = (data: IData[]) => {
  const monthList: number[] = [];
  data.forEach(({ date }) => {
    const month = new Date(date).getMonth();
    if (!monthList.includes(month)) monthList.push(month);
  });

  return monthList.map((month) => ({
    value: month + 1,
    label: months[month],
  }));
};
