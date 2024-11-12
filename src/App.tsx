import { useState } from 'react';
import { Country } from './Country';
import './App.css';

export type BanknotesType = 'USD' | 'CAD' | 'All';
export type MoneyType = {
  banknotes: BanknotesType;
  value: number;
  number: string;
};

const defaultMoney: MoneyType[] = [
  { banknotes: 'USD', value: 100, number: ' a1234567890' },
  { banknotes: 'USD', value: 50, number: ' z1234567890' },
  { banknotes: 'CAD', value: 100, number: ' w1234567890' },
  { banknotes: 'USD', value: 100, number: ' e1234567890' },
  { banknotes: 'USD', value: 50, number: ' c1234567890' },
  { banknotes: 'CAD', value: 100, number: ' r1234567890' },
  { banknotes: 'USD', value: 50, number: ' x1234567890' },
  { banknotes: 'CAD', value: 50, number: ' v1234567890' },
];

export const moneyFilter = (
  money: MoneyType[],
  filter: BanknotesType
): MoneyType[] => {
  if (filter === 'USD') {
    return money.filter(el => el.banknotes === 'USD');
  } else if (filter === 'CAD') {
    return money.filter(el => el.banknotes === 'CAD');
  } else {
    return money;
  }
};

function App() {
  const [money, setMoney] = useState<MoneyType[]>(defaultMoney);
  const [filterValue, setFilterValue] = useState<BanknotesType>('All');

  const filteredMoney = moneyFilter(money, filterValue);
  return (
    <div className='App'>
      <Country data={filteredMoney} setFilterValue={setFilterValue} />
    </div>
  );
}

export default App;
