import { StatisticCont, MainTextStatistic, ListStats, ItemStats, ItemText } from './Statistics.styled';
import { getRandomHexColor } from 'helpers/helpers';


export const Statistics = ({ datas }) => {
  return (
    <StatisticCont>
    <MainTextStatistic>UPLOAD STATS</MainTextStatistic>
    <ListStats>
    {datas.map((data) => (
        <ItemStats key={data.id} style={{ backgroundColor: getRandomHexColor() }}>
            <ItemText>{data.label}</ItemText>
            <ItemText>{data.percentage}%</ItemText>
        </ItemStats>
      ))}
    </ListStats>
    </StatisticCont>
  );
};
