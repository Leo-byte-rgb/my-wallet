import React from 'react';
import { Container, Header } from './styles';

interface IMessageProps {
  icon: string;
  description: string;
  footerText: string;
  title: string;
}

const MessageBox: React.FC<IMessageProps> = ({
  description,
  footerText,
  icon,
  title,
}) => {
  return (
    <Container>
      <Header>
        <h1>
          {title} <img src={icon} alt='' />
        </h1>
        <p>{description}</p>
      </Header>
      <footer>{footerText}</footer>
    </Container>
  );
};

export default React.memo(MessageBox);
