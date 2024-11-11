import { CurrentATM } from './CurrentATM';
import { MoneyType } from './App';

type CityPropsType = {
  data: MoneyType[];
};

export const City = (props: CityPropsType) => {
  const mappedMoney = props.data.map((el: MoneyType, index) => (
    <CurrentATM key={index} money={el} />
  ));

  return (
    <div>
      <div>{mappedMoney}</div>
    </div>
  );
};
