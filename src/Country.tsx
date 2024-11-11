import { City } from './City';
import { BanknotesType, MoneyType } from './App';

type CountryPropsType = {
  data: MoneyType[];
  setFilterValue: any; // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
};

export const Country = (props: CountryPropsType) => {
  const setAll = () => {
    // засетаем 'All'
  };

  const setUSD = () => {
    // засетаем 'USD'
  };

  const setCAD = () => {
    // засетаем 'CAD'
  };

  return (
    <div>
      <button
        onClick={() => {
          'засетаем All';
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          'засетаем Dollars';
        }}
      >
        USD
      </button>
      <button
        onClick={() => {
          'засетаем RUBLS';
        }}
      >
        CAD
      </button>
      <City data={'передаем денюжки в город'} />
    </div>
  );
};
