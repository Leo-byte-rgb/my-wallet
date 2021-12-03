import React, { useMemo } from 'react';
import MessageBox from '../../components/MessageBox';

import HappyIcon from '../../assets/happy.svg';
import SadIcon from '../../assets/sad.svg';
import WowIcon from '../../assets/wowFace.svg';

interface IMessageBoxContainerProps {
  balance: number;
}

const MessageBoxContainer: React.FC<IMessageBoxContainerProps> = ({
  balance,
}) => {
  const messageBoxProps = useMemo(() => {
    if (balance === 0)
      return {
        title: 'Tá estranho!',
        description: 'Sua carteira está neutra!',
        footerText: 'Atualizado com base nas entradas e saídas',
        icon: WowIcon,
      };
    return balance > 0
      ? {
          title: 'Muito Bem!',
          description: 'Sua carteira está positiva!',
          footerText: 'Atualizado com base nas entradas e saídas',
          icon: HappyIcon,
        }
      : {
          title: 'Que Pena!',
          description: 'Sua carteira está negativa :(',
          footerText: 'Atualizado com base nas entradas e saídas',
          icon: SadIcon,
        };
  }, [balance]);

  return <MessageBox {...messageBoxProps} />;
};

export default MessageBoxContainer;
