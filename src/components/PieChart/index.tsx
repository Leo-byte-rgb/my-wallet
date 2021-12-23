import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from './styled';

interface IChartData {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}
const PieChartComponent: React.FC<IChartData> = ({ data }) => (
  <Container>
    <SideLeft>
      <LegendContainer>
        {console.log(data)}
        <h2>Relação</h2>
        {data.map(({ percent, name, color }) => (
          <Legend color={color} key={name}>
            <div>{percent.toFixed(1)}</div>
            <span>{name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey='percent'>
            {data.map(({ name, color }) => (
              <Cell fill={color} key={name} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
export default PieChartComponent;
