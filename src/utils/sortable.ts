import { IData } from "../types/Data";

type SortableProps = {
  data: Array<IData> | undefined;
  sortBy: string;
  order: string;
};

export const sort = ({ data, order, sortBy }: SortableProps) => {
  if (!data) return;
  if (sortBy === "value" && order === "asc") {
    return data.sort((a, b) => Number(a.amount) - Number(b.amount));
  }
  if (sortBy === "value" && order === "desc") {
    return data.sort((a, b) => Number(b.amount) - Number(a.amount));
  }
  if (sortBy === "date" && order === "asc") {
    return data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
  if (sortBy === "date" && order === "desc") {
    return data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
};
