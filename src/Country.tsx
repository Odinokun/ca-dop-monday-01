import { City } from './City';
import { BanknotesType, MoneyType } from './App';

type CountryPropsType = {
  data: MoneyType[];
  setFilterValue: (filter: BanknotesType) => void;
};

export const Country = (props: CountryPropsType) => {
  const setAll = () => props.setFilterValue('All');
  const setUSD = () => props.setFilterValue('USD');
  const setCAD = () => props.setFilterValue('CAD');

  return (
    <div>
      <button onClick={setAll}>All</button>
      <button onClick={setUSD}>USD</button>
      <button onClick={setCAD}>CAD</button>
      <City data={props.data} />
    </div>
  );
};
