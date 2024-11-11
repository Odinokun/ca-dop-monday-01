import React, { useState } from 'react';
import './App.css';
import { Country } from './Country';

export type BanknotsType = ''; // создадим типы для banknotes -он может быть 'Dollars', 'RUBLS' или 'All'
export type MoneyType = {
  banknotes: BanknotsType;
  value: any; // не ленимся, убираем заглушку, и пишем правильный тип)
  number: any; // ложку за Димыча, за...
};

let defaultMoney: any = [
  // типизируем
  { banknotes: 'USD', value: 100, number: ' a1234567890' },
  { banknotes: 'USD', value: 50, number: ' z1234567890' },
  { banknotes: 'CAD', value: 100, number: ' w1234567890' },
  { banknotes: 'USD', value: 100, number: ' e1234567890' },
  { banknotes: 'USD', value: 50, number: ' c1234567890' },
  { banknotes: 'CAD', value: 100, number: ' r1234567890' },
  { banknotes: 'USD', value: 50, number: ' x1234567890' },
  { banknotes: 'CAD', value: 50, number: ' v1234567890' },
];

// типизируем на входе и выходе
export const moneyFilter = (money: any, filter: any): any => {
  //если пришел filter со значением 'All', то возвращаем все банкноты
  //return money.filter... ну да, придется фильтровать
};

function App() {
  // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
  const [money, setMoney] = useState<any>([]);
  const [filterValue, setFilterValue] = useState<any>(''); // по умолчанию указываем все банкноты

  // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
  // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
  const filteredMoney = moneyFilter(money, filterValue);
  return (
    <div className='App'>
      <Country
        data={filteredMoney} //отрисовать будем деньги после фильтрации
        setFilterValue={setFilterValue} //useState передаем? Так можно было?!
      />
    </div>
  );
}

export default App;
