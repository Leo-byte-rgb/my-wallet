import React, { ChangeEvent, useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Select';
import WalletBox from '../../components/WalletBox';
import PieChart from '../../components/PieChart';
import MessageBox from '../../Containers/MessageBox';

import gains from '../../data/gains';
import expenses from '../../data/expenses';

import { Container, Content } from './style';

import {
  getUniqueMonthsByData,
  getUniqueYearsByData,
} from '../List/utils/getUniqueDate';

interface DateProps {
  year: number;
  month: number;
}

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

const Dashboard: React.FC<IRouteParams> = () => {
  const [selectedDate, setSelectedDate] = useState<DateProps>({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const handleDate = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedDate({ ...selectedDate, [name]: Number(value) });
  };

  const data = useMemo(() => [...gains, ...expenses], []);

  const months = useMemo(() => getUniqueMonthsByData(), []);
  const years = useMemo(() => getUniqueYearsByData(data), [data]);

  const getTotalExpenses = () => {
    let total = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === selectedDate.month && year === selectedDate.year) {
        total += Number(item.amount);
      }
    });

    return total;
  };
  const getTotalGains = () => {
    let total = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === selectedDate.month && year === selectedDate.year) {
        total += Number(item.amount);
      }
    });

    return total;
  };

  const totalGains = getTotalGains();
  const totalExpenses = getTotalExpenses();
  const totalBalance = totalGains - totalExpenses;

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = ((totalGains / total) * 100).toFixed(1);
    const percentExpenses = ((totalExpenses / total) * 100).toFixed(1);

    return [];
  }, [totalExpenses, totalGains]);

  console.log(relationExpensesVersusGains);
  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#E44C4E'>
        <SelectInput
          options={years}
          name='year'
          onChange={handleDate}
          defaultValue={'2020'}
        />
        <SelectInput options={months} name='month' onChange={handleDate} />
      </ContentHeader>
      <Content>
        <WalletBox
          color='#4E41F0'
          title='Saldo'
          amount={totalBalance}
          footerLabel='Atualizado com base nas entradas e saídas'
          icon='dollarIcon'
        />
        <WalletBox
          color='#E7931B'
          title='Entradas'
          amount={totalGains}
          footerLabel='Atualizado com base nas entradas e saídas'
          icon='arrowUpIcon'
        />
        <WalletBox
          color='#E44C4E'
          title='Saídas'
          amount={totalExpenses}
          footerLabel='Atualizado com base nas entradas e saídas'
          icon='arrowDownIcon'
        />
        <MessageBox balance={totalBalance} />
        <PieChart />
      </Content>
    </Container>
  );
};

export default Dashboard;
