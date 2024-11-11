import { MoneyType } from './App';

type CurrentATMPropsType = {
  money: MoneyType;
};
export const CurrentATM = (props: CurrentATMPropsType) => {
  return (
    <div>
      <span>{props.money.banknotes}</span>
      <span>{props.money.value}</span>
    </div>
  );
};
