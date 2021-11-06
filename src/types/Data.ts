export interface IData {
  description: string;
  amount: string;
  type: string;
  frequency: string;
  date: string;
}

export interface FormattedData {
  id: number;
  description: string;
  amount: string;
  type: string;
  frequency: string;
  date: string;
  tagColor: string;
}
