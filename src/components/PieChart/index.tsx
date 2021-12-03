import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from './styled';

const PieChartComponent: React.FC = () => (
  <Container>
    <SideLeft>
      <LegendContainer>
        <h2>Relação</h2>
        <Legend color='#F7931B'>
          <div>90%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color='#E44C4E'>
          <div>10%</div>
          <span>Entradas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={[]} labelLine={false} dataKey='percent'></Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
export default PieChartComponent;
