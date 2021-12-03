import React from 'react';
import { Container } from './style';

import dollarIcon from '../../assets/dollar.svg';
import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';

import CountUp from 'react-countup';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dollarIcon' | 'arrowUpIcon' | 'arrowDownIcon';
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  amount,
  color,
  footerLabel,
  icon,
  title,
}) => {
  const selectedIcon = (iconArg: typeof icon) => {
    if (iconArg === 'dollarIcon') return dollarIcon;
    if (iconArg === 'arrowUpIcon') return arrowUpIcon;
    return arrowDownIcon;
  };
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix='R$ '
          separator='.'
          decimal=','
          decimals={2}
          duration={1}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={selectedIcon(icon)} alt={title} />
    </Container>
  );
};

export default WalletBox;
