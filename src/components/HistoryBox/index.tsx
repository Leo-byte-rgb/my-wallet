import React from 'react';
import { Tooltip } from 'recharts';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from 'recharts';
import { formatAmount } from '../../utils/formatters';
import { Container, Legend } from './style';

interface IHistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}) => (
  <Container>
    <header>
      <h2>Histórico de Saldo</h2>
      <div>
        <Legend color={lineColorAmountEntry}>
          <div>Entradas</div>
        </Legend>
        <Legend color={lineColorAmountOutput}>
          <div>Saídas</div>
        </Legend>
      </div>
    </header>

    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <CartesianGrid strokeDasharray='3 3' stroke='#cecece' />
        <XAxis dataKey='month' stroke='#cecece' />
        <Tooltip
          formatter={(value: number) => formatAmount(value.toFixed(2))}
        />
        <Line
          type='monotone'
          dataKey='amountEntry'
          name='Entradas'
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type='monotone'
          dataKey='amountOutput'
          name='Saídas'
          stroke={lineColorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);

export default HistoryBox;
