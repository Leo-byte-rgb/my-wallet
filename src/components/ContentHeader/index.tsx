import React from "react";
import { Container, Controllers, TitleContainer } from "./style";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  children,
  lineColor,
  title,
}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
