import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/Select";
import { Container } from "./style";
const Dashboard: React.FC = () => {
  const options = [{ value: "leo", label: "leo" }];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="white">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
