import { styled } from 'styled-components';
import { MoneyType } from './App';

type CurrentATMPropsType = {
  money: MoneyType;
};
export const CurrentATM = (props: CurrentATMPropsType) => {
  return props.money.banknotes === 'USD' ? (
    <BanknotesUSD>
      <span>{props.money.banknotes}</span>
      <span>{props.money.value}</span>
      <span>{props.money.number}</span>
    </BanknotesUSD>
  ) : (
    <BanknotesCAD>
      <span>{props.money.banknotes}</span>
      <span>{props.money.value}</span>
      <span>{props.money.number}</span>
    </BanknotesCAD>
  );
};

const BanknotesUSD = styled.div`
  background-color: chartreuse;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: calc(33.33% - 20px);
`;

const BanknotesCAD = styled.div`
  background-color: violet;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: calc(33.33% - 20px);
`;
