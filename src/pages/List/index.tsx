import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/Select';
import gains from '../../data/gains';
import expenses from '../../data/expenses';
import { sortables, orders } from './utils/options';
import {
  getUniqueMonthsByData,
  getUniqueYearsByData,
} from './utils/getUniqueDate';
import { getMonth, getYear } from './utils/dateAux';
import { Container, Content, Filters } from './style';
import { sort } from '../../utils/sortable';
import { formatAmount, formatDate } from '../../utils/formatters';
import { FormattedData, IData } from '../../types/Data';
interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}
interface IPagePropsByMatch {
  title: string;
  lineColor: string;
  data: Array<IData>;
}

type SortProps = {
  order: 'asc' | 'desc';
  sortBy: 'value' | 'date';
};
interface DateProps {
  year: number;
  month: number;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const { type } = match.params;
  const [data, setData] = useState<FormattedData[]>();
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [sortProps, setSortProps] = useState<SortProps>({
    order: 'asc',
    sortBy: 'value',
  });
  const [selectedDate, setSelectedDate] = useState<DateProps>({
    year: new Date().getFullYear(),
    month: 1,
  });

  const handleRecurrentFrequency = () => setSelectedFrequency('recorrente');
  const handleEventualFrequency = () => setSelectedFrequency('eventual');
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSortProps({ ...sortProps, [name]: value });
  };
  const handleDate = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedDate({ ...selectedDate, [name]: Number(value) });
  };
  const pageProps = useMemo<IPagePropsByMatch>(() => {
    if (type === 'entry-balance') {
      return { title: 'Entradas', data: gains, lineColor: '#F7931B' };
    }
    return { title: 'Saídas', data: expenses, lineColor: '#E44C4E' };
  }, [type]);

  const months = useMemo(
    () => getUniqueMonthsByData(pageProps.data),
    [pageProps.data]
  );
  const years = useMemo(
    () => getUniqueYearsByData(pageProps.data),
    [pageProps.data]
  );

  useEffect(() => {
    const sorted = sort({
      data: pageProps.data,
      ...sortProps,
    });
    if (!sorted) return;
    const filterByDate = sorted.filter(
      (item) =>
        getMonth(item.date) === selectedDate.month &&
        getYear(item.date) === selectedDate.year
    );
    const formattedData = filterByDate.map(
      ({ amount, date, description, frequency, type }) => ({
        id: Math.random() * 10000,
        amount: formatAmount(amount),
        date,
        description,
        frequency,
        type,
        tagColor: frequency === 'eventual' ? '#4E41F0' : '#E44C4E',
      })
    );
    setData(formattedData);
  }, [pageProps, selectedDate, sortProps]);

  return (
    <Container>
      <ContentHeader title={pageProps.title} lineColor={pageProps.lineColor}>
        <SelectInput
          options={years}
          name='year'
          onChange={handleDate}
          defaultValue={'2020'}
        />
        <SelectInput options={months} name='month' onChange={handleDate} />
        <SelectInput
          options={sortables}
          name='sortBy'
          onChange={handleSort}
          defaultValue={'value'}
        />
        <SelectInput options={orders} name='order' onChange={handleSort} />
      </ContentHeader>
      <Filters>
        <button
          type='button'
          className='tag-filter tag-filter-recurrent'
          onClick={() => handleRecurrentFrequency()}
        >
          Recorrentes
        </button>
        <button
          type='button'
          className='tag-filter tag-filter-eventuals'
          onClick={() => handleEventualFrequency()}
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        {data && selectedFrequency
          ? data
              .filter(({ frequency }) => frequency === selectedFrequency)
              .map(({ id, amount, date, description, tagColor }) => (
                <HistoryFinanceCard
                  key={id}
                  amount={amount}
                  subtitle={formatDate(date)}
                  tagColor={tagColor}
                  title={description}
                />
              ))
          : data?.map(({ id, amount, date, description, tagColor }) => (
              <HistoryFinanceCard
                key={id}
                amount={amount}
                subtitle={formatDate(date)}
                tagColor={tagColor}
                title={description}
              />
            ))}
      </Content>
    </Container>
  );
};

export default List;
