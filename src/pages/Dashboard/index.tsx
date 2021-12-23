import React, { ChangeEvent, useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Select';
import WalletBox from '../../components/WalletBox';
import PieChart from '../../components/PieChart';
import MessageBox from '../../Containers/MessageBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartComponent from '../../components/BarChart';

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
    month: 1,
    year: new Date().getFullYear(),
  });

  const handleDate = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedDate({ ...selectedDate, [name]: Number(value) });
  };

  const data = useMemo(() => [...gains, ...expenses], []);

  const months = useMemo(() => getUniqueMonthsByData(data), [data]);
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

    const percentGains = (totalGains / total) * 100;
    const percentExpenses = (totalExpenses / total) * 100;

    const data = [
      {
        name: 'Entradas',
        value: totalExpenses,
        percent: isNaN(percentGains) ? 50 : percentGains,
        color: '#E44C4E',
      },
      {
        name: 'Saídas',
        value: totalGains,
        percent: isNaN(percentExpenses) ? 50 : percentExpenses,
        color: '#F7931B',
      },
    ];
    return data;
  }, [totalExpenses, totalGains]);
  console.log(months);
  const historyData = useMemo(() => {
    return months.map(({ value, label }) => {
      let amountEntry = 0;
      let amountOutput = 0;

      gains.forEach(({ date, amount }) => {
        const gainMounth = new Date(date).getMonth() + 1;
        const gainYear = new Date(date).getFullYear();

        if (gainMounth === value && gainYear === selectedDate.year) {
          try {
            amountEntry += Number(amount);
          } catch {
            throw new Error('Amount Entry must be valid number');
          }
        }
      });
      expenses.forEach(({ date, amount }) => {
        const gainMounth = new Date(date).getMonth() + 1;
        const gainYear = new Date(date).getFullYear();

        if (gainMounth === value && gainYear === selectedDate.year) {
          try {
            amountOutput += Number(amount);
          } catch {
            throw new Error('Amount Entry must be valid number');
          }
        }
      });
      return {
        monthNumber: value,
        month: label.substring(0, 3),
        amountEntry,
        amountOutput,
      };
    });
  }, [months, selectedDate.year]);

  const relationExpenseRecurrentVersusEventual = useMemo(() => {
    let amountRecurent = 0;
    let amountEventual = 0;

    expenses
      .filter(({ frequency, date }) => {
        const month = new Date(date).getMonth() + 1;
        const year = new Date(date).getFullYear();

        return month === selectedDate.month && year === selectedDate.year;
      })
      .forEach(({ frequency, amount }) => {
        if (frequency === 'recorrente') {
          return (amountRecurent += Number(amount));
        }
        return (amountEventual += Number(amount));
      });

    const total = Number(amountRecurent + amountEventual);

    return [
      {
        name: 'Recorrente',
        amount: amountRecurent,
        percent: Number(((amountRecurent / total) * 100).toFixed(1)),
        color: '#F7931B',
      },
      {
        name: 'Eventual',
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)),
        color: '#E44C4E',
      },
    ];
  }, [selectedDate.month, selectedDate.year]);

  const relationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurent = 0;
    let amountEventual = 0;

    gains
      .filter(({ frequency, date }) => {
        const month = new Date(date).getMonth() + 1;
        const year = new Date(date).getFullYear();

        return month === selectedDate.month && year === selectedDate.year;
      })
      .forEach(({ frequency, amount }) => {
        if (frequency === 'recorrente') {
          return (amountRecurent += Number(amount));
        }
        return (amountEventual += Number(amount));
      });

    const total = Number(amountRecurent + amountEventual);

    return [
      {
        name: 'Recorrente',
        amount: amountRecurent,
        percent: Number(((amountRecurent / total) * 100).toFixed(1)),
        color: '#F7931B',
      },
      {
        name: 'Eventual',
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)),
        color: '#E44C4E',
      },
    ];
  }, [selectedDate.month, selectedDate.year]);

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
        <PieChart data={relationExpensesVersusGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry='#E7931B'
          lineColorAmountOutput='#E44C4E'
        />
        <BarChartComponent
          title='Saídas'
          data={relationExpenseRecurrentVersusEventual}
        />
        <BarChartComponent
          title='Saídas'
          data={relationGainsRecurrentVersusEventual}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
