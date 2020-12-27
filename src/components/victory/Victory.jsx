import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from 'victory';
import styled from 'styled-components';

const Container = styled.div`
  margin: 8px;
  margin-left: calc(25vw - 8px);
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 50vw;
  cursor: context-menu;
`;

export default function Victory() {
  const data2011 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 },
  ];

  const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 },
  ];

  const data2015 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
  ];

  return (
    <div className="frame">
      <h1>Victory</h1>
      <Container>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={40}
          animate={{ duration: 1000 }}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
          <VictoryStack colorScale={'warm'}>
            <VictoryBar data={data2011} x="quarter" y="earnings" />
            <VictoryBar data={data2012} x="quarter" y="earnings" />
            <VictoryBar data={data2013} x="quarter" y="earnings" />
            <VictoryBar data={data2014} x="quarter" y="earnings" />
            <VictoryBar data={data2015} x="quarter" y="earnings" />
          </VictoryStack>
        </VictoryChart>
      </Container>
    </div>
  );
}
