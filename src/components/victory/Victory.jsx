import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryArea,
  VictoryLegend,
} from 'victory';

export default function Victory() {
  const data2011 = [
    { quarter: 1, earnings: 13000, label: 'Q1' },
    { quarter: 2, earnings: 16500, label: 'Q2' },
    { quarter: 3, earnings: 14250, label: 'Q3' },
    { quarter: 4, earnings: 19000, label: 'Q4' },
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
      <VictoryChart
        //horizontal
        theme={VictoryTheme.material}
        domainPadding={40}
        animate={{ duration: 1000 }}
        height={300}
        width={400}
      >
        <VictoryLegend
          x={60}
          y={10}
          title="Legend"
          centerTitle
          orientation="horizontal"
          gutter={10}
          style={{ border: { stroke: 'black' }, title: { fontSize: 10 } }}
          data={[
            { name: '2011', symbol: { fill: '#ffaf55' } },
            { name: '2012', symbol: { fill: '#ff821d' } },
            { name: '2013', symbol: { fill: '#dc5429' } },
            { name: '2014', symbol: { fill: '#c43343' } },
            { name: '2015', symbol: { fill: '#940031' } },
          ]}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
        <VictoryStack colorScale={'warm'}>
          <VictoryArea
            data={data2011}
            x="quarter"
            y="earnings"
            style={{
              data: {
                stroke: '#333333',
                strokeWidth: 5,
                strokeLinecap: 'round',
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
          <VictoryArea
            data={data2012}
            x="quarter"
            y="earnings"
            style={{
              data: {
                stroke: '#333333',
                strokeWidth: 5,
                strokeLinecap: 'round',
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
          <VictoryArea
            data={data2013}
            x="quarter"
            y="earnings"
            style={{
              data: {
                stroke: '#333333',
                strokeWidth: 5,
                strokeLinecap: 'round',
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
          <VictoryArea
            data={data2014}
            x="quarter"
            y="earnings"
            style={{
              data: {
                stroke: '#333333',
                strokeWidth: 5,
                strokeLinecap: 'round',
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
          <VictoryArea
            data={data2015}
            x="quarter"
            y="earnings"
            style={{
              data: {
                stroke: '#333333',
                strokeWidth: 5,
                strokeLinecap: 'round',
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
}
