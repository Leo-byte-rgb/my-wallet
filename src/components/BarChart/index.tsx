import React from 'react';
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from './styles';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import { formatAmount } from '../../utils/formatters';

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartComponent: React.FC<IBarChartProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
          w{' '}
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
          <BarChart data={data}>
            <Tooltip
              cursor={{ fill: 'none' }}
              formatter={(value: number) => formatAmount(value.toFixed(1))}
            />

            <Bar dataKey='amount' name='Valor'>
              {data.map(({ color, name }) => (
                <Cell fill={color} cursor='pointer' key={name} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartComponent;
