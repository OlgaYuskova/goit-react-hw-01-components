import { StatisticCont, MainTextStatistic, ListStats, ItemStats, ItemText } from './Statistics.styled';



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


function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}