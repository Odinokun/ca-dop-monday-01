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

//2
// Отлично, но теперь давайте совсем все сделаем по красоте. Вынесем верстку в отдельную компоненту и ее замапим!
// Ну и наконец давайте версточку натянем, для этого будем использовать StyledComponents
// yarn add styled-components
// yarn add @types/styled-components

//3
// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке
