import React, { FC } from "react";
import Chart from "react-google-charts";
import { DailyForecast } from "Types/interfaces";
import { useLineChart } from "hooks";
// import "styles/daily-forecast.scss";

interface ChartProps {
  data: DailyForecast
}

const RangeChart: FC<ChartProps> = ({ data }): JSX.Element => {

  const chartData = useLineChart(data);

  const settings = {
    style: 'bars',
    barWidth: 0,
    lineWidth: 4,
    pointSize: 10,
    fillOpacity: 1
  }

  return(
    <Chart
      width={'100%'}
      height={'250px'}
      chartType="LineChart"
      loader={<div>Loading...</div>}
      data={[
        [
          { type: 'string', label: 'x' },
          { type: 'number', label: 'values' },
          { id: 'i0', type: 'number', role: 'interval' },
          { id: 'i1', type: 'number', role: 'interval' },
          { id: 'i2', type: 'number', role: 'interval' },
          { id: 'i2', type: 'number', role: 'interval' }
        ],
        ...chartData
      ]}
      options={{
        title: 'Daily Temperature Outlook',
        curveType: 'function',
        intervals: { color: 'series-color' },
        interval: {
          i0: {
            color: '#00A2FF',
            ...settings
          },
          i1: {
            color: '#FF473A',
            ...settings
          },
          i2: { style: 'area', curveType: 'function', fillOpacity: 0.2 },
        },
        legend: 'none',
      }}
      rootProps={{ 'data-testid': '8' }}
    />
  );
};

export default RangeChart;