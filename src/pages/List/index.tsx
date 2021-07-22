import React from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/Select";
import { Container, Content, Filters } from "./style";
const List: React.FC = () => {
  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];
  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];
  return (
    <Container>
      <ContentHeader title="List" lineColor="white">
        <SelectInput options={years} />
        <SelectInput options={months} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventuals">
          Eventuais
        </button>
      </Filters>
      <Content>
        <HistoryFinanceCard
          amount="125"
          subtitle="12/07/2021"
          tagColor="white"
          title="Steam"
        />
      </Content>
    </Container>
  );
};

export default List;
