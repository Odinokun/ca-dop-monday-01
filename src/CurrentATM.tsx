import { MoneyType } from './App';

type CurrentATMPropsType = {
  money: MoneyType;
};
export const CurrentATM = (props: CurrentATMPropsType) => {
  return <div>{props.money.banknotes}</div>;
};
