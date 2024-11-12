import { styled } from 'styled-components';
import { MoneyType } from './App';

type CurrentATMPropsType = {
  money: MoneyType;
};
export const CurrentATM = (props: CurrentATMPropsType) => {
  const banknotesBg =
    props.money.banknotes === 'USD' ? 'chartreuse' : 'cadetblue';

  return (
    <Banknote bgColor={banknotesBg}>
      <span>{props.money.banknotes}</span>
      <span>{props.money.value}</span>
      <span>{props.money.number}</span>
    </Banknote>
  );
};

type StyledProps = {
  bgColor: string;
};

const Banknote = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: calc(33.33% - 20px);
  background-color: ${props => props.bgColor};
`;
