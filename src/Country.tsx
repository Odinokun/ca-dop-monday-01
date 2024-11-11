import React from 'react';
import { City } from './City';
import { BanknotsType, MoneyType } from './App';

type CountryPropsType = {
  data: any;
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
