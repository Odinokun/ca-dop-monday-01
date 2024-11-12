import { CurrentATM } from './CurrentATM';
import { MoneyType } from './App';
import styled from 'styled-components';

type CityPropsType = {
  data: MoneyType[];
};

export const City = (props: CityPropsType) => {
  const mappedMoney = props.data.map((el: MoneyType, index) => (
    <CurrentATM key={index} money={el} />
  ));

  return <Wrapper>{mappedMoney}</Wrapper>;
};

const Wrapper = styled.div<{ $primary?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  font-size: 30px;
  gap: 30px;
`;
